import React,{useEffect,useReducer, useCallback} from 'react';
import Table from './Table';

const initialState = {
    winner:'',
    turn: 'O',
    tableData:[['','',''],['','',''],['','','']],
    recentCell:[-1,-1]
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
    switch( action.type ){
        case SET_WINNER : 
            // state.winner = action.winner 같이 직접적으로 바꾸면 안됨.
            return{
                ...state,
                winner: action.winner
            };
        case CLICK_CELL :{
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]]; 
            tableData[action.row][action.cell]=state.turn;
            return {
                ...state,
                tableData,
                recentCell:[action.row,action.cell]
            }
        }
        case CHANGE_TURN:{
            return{
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            }
        }
        case RESET_GAME:{
            return {
                ...state,
                tableData:[['','',''],['','',''],['','','']],
                recentCell:[-1,-1],
            }
        }
        default:
            return state;
    }
};
const TicTacToe = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const {tableData,turn, winner,recentCell} = state;
    // const [winner,setWinner] = useState('');
    // const [turn, setTurn] = useState('O');
    // const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]) 
    // 테이블이 3x3 테이블이므로 2차원배열로 3x3 되게 값을 넣어둠..

    const onClickTable = useCallback(()=>{
        dispatch({ type : SET_WINNER , winner:'O'});
    },[]);

    useEffect(()=>{
        const [row,cell] = recentCell;
        if(row < 0){
            return;
        }
        let win = false;
        if(tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn){
            // 가로줄 검사 
            win = true;
        }
        if(tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn){
            // 세로줄 검사
            win = true;
        }
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn ){
            //왼쪽 0,0 오른쪽 2,2 대각선 확인
            win = true;
        }
        if(tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn){
            // 우축위 2,0 에서 왼쪽아래 2,0 대각선 확인
            win = true;
        }
        if(win){
            //승리시
            dispatch({ type : SET_WINNER, winner: turn});
            dispatch({ type : RESET_GAME });
        }else{
            //무승부 검사
            let all = true; // all 이 그대로 true면 칸이 전부찬거기때문에 무승부
            tableData.forEach((row)=>{
                row.forEach((cell)=>{
                    if(!cell){ //한칸이라도 비어있을때.
                        all = false;
                    }
                })
            });
            if(all){ // 무승부일경우 
                dispatch({ type : RESET_GAME })
            }else{
                dispatch({type:CHANGE_TURN});
            }
            
        }
    },[recentCell])

    return(
        
        <>
        <Table tableData = {tableData} dispatch = {dispatch}/>
        {winner && <div>{winner}님의 승리</div>}
        </>
    )

};
export default TicTacToe;
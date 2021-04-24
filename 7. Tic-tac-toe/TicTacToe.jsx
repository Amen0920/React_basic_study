import React,{useState,useReducer, useCallback} from 'react';
import Table from './Table';

const initialState = {
    winner:'',
    turn: 'O',
    tableData:[['','',''],['','',''],['','','']],
}

const reducer = (state, action) => {
    switch( action.type ){
        case 'SET_WINNER' : 
            // state.winner = action.winner 같이 직접적으로 바꾸면 안됨.
            return{
                ...state,
                winner: action.winner
            };
    }
}

const TicTacToe = () => {
    const [state,dispatch] = useReducer(reducer,initialState);

    // const [winner,setWinner] = useState('');
    // const [turn, setTurn] = useState('O');
    // const [tableData, setTableData] = useState([['','',''],['','',''],['','','']]) 
    // 테이블이 3x3 테이블이므로 2차원배열로 3x3 되게 값을 넣어둠..

    const onClickTable = useCallback(()=>{
        dispatch({ type : 'SET_WINNER', winner:'O'});
    },[]);

    return(
        <>
        <Table onClick = {onClickTable}/>
        {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )

};
export default TicTacToe;
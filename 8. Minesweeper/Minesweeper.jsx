import React, {useReducer, createContext, useMemo} from 'react';
import Table from './Table';
import Form from './Form'

export const CODE = {
    MINE : -7,
    NOMAL : -1,
    QUESTION : -2,
    FLAG : -3,
    QUESTION_MINE : -4,
    FLAG_MINE : -5,
    CLICKED_MINE: -6,
    OPENED : 0 // 0이상이면 다 OPENED
}

export const TableContext = createContext({
    tableData:[],
    halted:true,
    dispatch: () => {},
});

const initialState = {
    tableData:[],
    timer:0,
    result:'',
    halted:true
};

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NOMALIZE_CELL = 'NOMALIZE_CELL';

const plantMine = (row,cell,mine) =>{
    const candidate = Array(row*cell).fill().map((arr,i)=>{
        return i;
    });
    const shuffle = [];
    while(candidate.length > row * cell - mine ){
        const chosen = candidate.splice(Math.floor(Math.random()*candidate.length),1)[0];
        shuffle.push(chosen);
    };
    const data = [];
    for( let i = 0; i < row; i++){
        const rowData = [];
        data.push(rowData);
        for(let j = 0; j < cell; j++){
            rowData.push(CODE.NOMAL);

        }
    };

    for (let k = 0; k < shuffle.length; k++ ){
        const ver = Math.floor(shuffle[k]/cell);
        const her = shuffle[k] % cell;
        data[ver][her] = CODE.MINE;
    }
    console.log(data);
    return data;
}


const reducer = (state,action) => {
    switch(action.type){
        case START_GAME : {
            return{
                ...state,
                tableData:plantMine(action.row,action.cell,action.mine),
                halted:false
            }
        };
        case OPEN_CELL :{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.OPENED;
            return{
                ...state,
                tableData,
            }
        };
        case CLICK_MINE :{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.CLICKED_MINE;
            return{
                ...state,
                tableData,
                halted : true  //게임멈추게하기.
            }
        };
        case FLAG_CELL:{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.MINE){
                tableData[action.row][action.cell] = CODE.FLAG_MINE;
            }else{
                tableData[action.row][action.cell] = CODE.FLAG;
            }
            
            return{
                ...state,
                tableData,
            }
        };
        case QUESTION_CELL:{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.FLAG_MINE){
                tableData[action.row][action.cell] = CODE.QUESTION_MINE;
            }else{
                tableData[action.row][action.cell] = CODE.QUESTION;
            }
            
            return{
                ...state,
                tableData,
            }
        };
        case NOMALIZE_CELL:{
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if(tableData[action.row][action.cell] === CODE.QUESTION_MINE){
                tableData[action.row][action.cell] = CODE.MINE;
            }else{
                tableData[action.row][action.cell] = CODE.NOMAL;
            }
            
            return{
                ...state,
                tableData,
            }
        }
        
        default:
            return state;
    }
};

const Minesweeper = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const { tableData, halted, timer, result } = state;
    const value = useMemo(()=>({ tableData: tableData, dispatch, halted:halted}),[tableData])
    return(
        <TableContext.Provider value={value}>
            <Form />
            <div>{timer}</div>
            <Table/>
            <div>{result}</div>
        </TableContext.Provider>
    )
}

export default Minesweeper;
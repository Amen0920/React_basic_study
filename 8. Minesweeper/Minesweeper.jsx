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
    dispatch:()=>{}
});

const initialState = {
    tableData:[],
    timer:0,
    result:'',
};

export const START_GAME = 'START_GAME';

const reducer = (state,action) => {
    switch(action.type){
        case START_GAME : {
            return{
                ...state,
                tableData:plantMine(action.row,action.cell,action.mine)
            }
        }
        
        default:
            return state;
    }
};

const Minesweeper = () => {
    const [state,dispath] = useReducer(reducer,initialState);

    const value = useMemo(()=>({ tableData: state.tableData, dispath}),[state.tableData])
    return(
        <TableContext.Provider value={value}>
            <Form />
            <div>{state.timer}</div>
            <Table/>
            <div>{state.result}</div>
        </TableContext.Provider>
    )
}

export default Minesweeper;
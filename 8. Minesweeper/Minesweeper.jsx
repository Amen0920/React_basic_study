import React, {useReducer} from 'react';
import Table from './Table';
import Form from './Form'

const initialState = {
    tableData:[],
    timer:0,
    result:'',
};

const reducer = (state,action) => {
    switch(action.type){
        
        default:
            return state;
    }
};

const Minesweeper = () => {
    const [state,dispath] = useReducer(reducer,initialState);
    return(
        <>
            <Form dispatch = {dispatch}/>
            <div>{state.timer}</div>
            <Table/>
            <div>{state.result}</div>
        </>
    )
}

export default Minesweeper;
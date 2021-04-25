import React,{useCallback, useState} from 'react';

const Form = () => {
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);

    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    },[]);
    const onChangeCell = useCallback((e) => {
        setCell(e.target.value);
    },[]);
    const onChangeMine = useCallback((e) => {
        setMine(e.target.value);
    },[]);

    const onClickBtn = useCallback(() => {
        
    },[])

    return(
        <>
            <input type="number" placeholder="row" value={row} onChange={onChangeRow} />
            <input type="number" placeholder="cell" value={cell} onChange={onChangeCell} />
            <input type="number" placeholder="mine" value={mine} onChange={onChangeMine} />
            <button onClick={onClickBtn}>시작</button>
        </>
    )
};

export default Form;
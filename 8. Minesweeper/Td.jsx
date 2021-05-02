import React, { useCallback, useContext, memo, useMemo } from 'react'
import { CODE, OPEN_CELL, TableContext, CLICK_MINE, FLAG_CELL, QUESTION_CELL,NOMALIZE_CELL } from './Minesweeper';


const getTdStyle = (code) => {
    switch (code) {
        case CODE.NOMAL:
        case CODE.MINE :{
            return {
                background: '#444',
            }
        };
        case CODE.CLICKED_MINE:
        case CODE.OPENED:{
            return{
                background:'white',
            }
        };
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:{
            return{
                background:'yellow'
            };
        };
        case CODE.FLAG:
        case CODE.FLAG_MINE:{
            return{
                background:'red'
            }
        }
        default:{
            return{
                background:'white'
            }
        }
    }
};

const getTdText = (code) => {
    console.log('td text')
    switch (code) {
        case CODE.NOMAL:{
            return '';
        };
        case CODE.MINE:{
            return 'X';
        };
        case CODE.CLICKED_MINE:{
            return 'BOOM!'
        };
        case CODE.FLAG_MINE:
        case CODE.FLAG:
            return '!';
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return '?';
        
        default:{
            return code || '';
        }

    }
};


const Td =memo(({rowIndex, cellIndex}) => {

    const { tableData,dispatch, halted } = useContext(TableContext);
    const onClickTd = useCallback(() =>{
        if(halted)return;
        switch (tableData[rowIndex][cellIndex]){
            case CODE.OPENED:
            case CODE.FLAG_MINE:
            case CODE.FLAG:
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                return;

            case CODE.NOMAL : {
                dispatch({type:OPEN_CELL, row:rowIndex, cell:cellIndex})
                return;
            }
            case CODE.MINE : {
                dispatch({type:CLICK_MINE, row: rowIndex, cell:cellIndex})
                return;
            }

        }
        
    },[tableData[rowIndex][cellIndex],halted]);

    const onRightClickTd = useCallback((e) => {
        if(halted)return;
        e.preventDefault(); //브라우저 우클릭시 뜨는창 안뜨게...
        switch( tableData[rowIndex][cellIndex] ){  
            case CODE.NOMAL:
            case CODE.MINE:{
                dispatch({type:FLAG_CELL, row: rowIndex, cell:cellIndex});
                return;
            };
            case CODE.FLAG:
            case CODE.FLAG_MINE:{
                dispatch({type:QUESTION_CELL, row: rowIndex, cell:cellIndex});
                return;
            }
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:{
                dispatch({type:NOMALIZE_CELL, row: rowIndex, cell:cellIndex})
                return;
            }
            default:{
                return;
            }

        }

    },[tableData[rowIndex][cellIndex],halted]);
    console.log('td rendered')

    return (
       
        <RealTd data = {tableData[rowIndex][cellIndex]} onClickTd={onClickTd} 
                onRightClickTd={onRightClickTd}/>
    )
      
   

});

const RealTd = memo(({data, onClickTd, onRightClickTd }) => {
    console.log('realTd')
    return (
        <>
            <td
                style={getTdStyle(data)}
                onClick={onClickTd} onContextMenu={onRightClickTd}
                >
                {getTdText(data)}
            </td>
         </>
    )
})


export default Td;
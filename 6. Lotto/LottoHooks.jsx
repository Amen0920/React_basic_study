import React ,{ useRef, useState, useEffect, useMemo } from 'react';
import Ball from './Ball';

function getWinNumbers(){
    console.log('getWinNumbers')
    const candidate = Array(45).fill().map((v,i)=> i +1);
    const suffle = [];
    while(candidate.length > 0){
        suffle.push(candidate.splice(Math.floor(Math.random()*candidate.length),1)[0]);

    }
    const bonusNumber = suffle[suffle.length-1];
    const winNumbers = suffle.slice(0,6).sort((p,c) => p-c);
    return [...winNumbers,bonusNumber];
};

const Lotto = () =>{
    const lottoNumbers = useMemo(() => getWinNumbers(), [])
    const [winNumbers,setWinNumbers] = useState(lottoNumbers);
    const [winBalls,setWinBalls] = useState([]);
    const [bonus,setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(()=>{
        for(let i =0 ; i< winNumbers.length-1; i++){
            timeouts.current[i] = setTimeout(()=>{
                setWinBalls((prev) => [...prev,winNumbers[i]]);
            },(i + 1)*1000);
        }
        timeouts.current[6] = setTimeout(()=>{
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);

        return()=>{
            timeouts.current.forEach((v)=>{
                clearTimeout(v);
            })
        }
    },[timeouts.current]); // 두번째 인수인 배열 [] 이 빈 배열이면 compoentDidMount와 동일역할을함
           // 배열의 요소가 있으면 componetDidMount, componetDidUpdate 둘 다의 역할을함

    const onClickRedo = ()=>{
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }

    return(
        <>
            <div>당첨숫자</div>
            <div id="result">
                {winBalls.map((v) => <Ball key={v} number={v}/>)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus}/>}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    )


};

export default Lotto;

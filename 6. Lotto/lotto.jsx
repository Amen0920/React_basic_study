import React , { Component } from 'react'
import Ball from './Ball';

function getWinNumbers(){
    console.log('getWinnumbers');
    const candidate = Array(45).fill().map((v,i)=> i +1);
    const suffle = [];
    while(candidate.length > 0){
        suffle.push(candidate.splice(Math.floor(Math.random()*candidate.length),1)[0]);

    }
    const bonusNumber = suffle[suffle.length-1];
    const winNumbers = shuffle.slice(0,6).sort((p,c) => p-c);
    return [...winNumbers,bonusNumber];
};

class Lotto extends Component {
    state = {
        winNumbers:getWinNumbers(), // 당첨숫자들
        winBalls:[],  //당첨숫자들중 앞 6개 넣을공간
        bonus:null, // 보너스 공
        redo:false,

    };

    render(){
        const {winBalls, bonus, redo} = this.state;
        return(
            <>
                <div>당첨숫자</div>
                <div id="result">
                    {winBalls.map((v) => <Ball key={v} number={v}/>)}
                </div>
                <div>보너스!</div>
                {bonus && <Ball number={bonus}/>}
                <button onClick={redo ? onClickRedo : ()=>{}}>한 번 더!</button>
            </>
        )
    }
}

export default Lotto;
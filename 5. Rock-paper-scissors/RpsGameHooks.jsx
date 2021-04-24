import React,{useState, useRef, useEffect} from 'react'

const rspCoords = {
    rock:'0',
    scissor:'-142px',
    paper:'-284px'

};
const scores = {
    rock:0,
    scissor:1,
    paper:-1
};
const computerChoice = (imgCoord)=>{
    return Object.entries(rspCoords).find(function(v){
        return v[1] === imgCoord;
    })[0];
};



const Rsp = () =>{
    const [result,setResult] = useState('');
    const [imgCoord,setImgCoord] = useState(rspCoords.rock);
    const [score,setScore] = useState(0);
    const interval = useRef();

    useEffect(()=>{ // componentDidMount,componentDidUpdate 역할을 대응함 ( 1대1 대응은아님)
        console.log('다시실행')
        interval.current = setInterval(changeHand, 100);
        return () => { // componetWillUnmount 역할
            console.log('종료')
            clearInterval(interval.current)
        }
    },[imgCoord]);

    const changeHand = () => {
        
        if(imgCoord === rspCoords.rock){
            setImgCoord(rspCoords.scissor);
        }else if(imgCoord === rspCoords.scissor){
            setImgCoord(rspCoords.paper);
        }else if(imgCoord === rspCoords.paper){
            setImgCoord(rspCoords.rock);
        }
    };
    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        console.log(diff);
        if(diff == 0 ){
            setResult('비겼습니다.')
        }else if([-1,2].includes(diff)){
            setResult('이겼습니다!');
            setScore((prevScore)=>{
                return(prevScore+1)
            })
        }else {
            setResult('졌습니다!');
            setScore((prevScore)=>{
                return(prevScore+1);
            })
        }
        setTimeout(()=>{
           interval.current = setInterval(this.changeHand,100);
        },2000);
    };
    return (
        <>
             <div id="computer" style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
                <div>
                    <button id="rock" className="btn" onClick={onClickBtn('rock')}>Rock</button>
                    <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>Scissor</button>
                    <button id="paper" className="btn" onClick={onClickBtn('paper')}>Paper</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
        </>
    );
}
export default Rsp;
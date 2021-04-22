import React,{ Component } from 'react'

//클래스의 경우
//constructor -> render -> ref -> componentDidMount  
//->(setState/props  바뀔때 -> shouldComponetUpdate-> render -> compoentDidUpdate )
//->부모 컴포넌트에서 제거시킬때 -> componentWillUnmount -> 소멸


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


class RSP extends Component {
    state = {
        result:'',
        score:0,
        imgCoord:'0',
    };

    interval;

    componentDidMount(){ // 컴포넌트가 첫 렌더링될때 => 보통 비동기 요청을 많이함
        this.interval=setInterval(this.changeHand,100);  
    };
    componentDidUpdate(){ //리렌더링시 실행되는부분
        
    };
    componentWillUnmount(){ // 컴포넌트가 제거되기 직전에 => 비동기 요청 정리를 많이넣음.
        clearInterval(this.interval);
    };
    changeHand = () =>{
        const { imgCoord } = this.state;
        if(imgCoord === rspCoords.rock){
            this.setState({
                imgCoord:rspCoords.scissor,
            });
        }else if(imgCoord === rspCoords.scissor){
            this.setState({
                imgCoord:rspCoords.paper
            });
        }else if(imgCoord === rspCoords.paper){
            this.setState({
                imgCoord:rspCoords.rock
            });
        }
    }
    onClickBtn = (choice) => () =>{
        const { imgCoord } = this.state
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        console.log(diff);
        if(diff == 0 ){
            this.setState({
                result:'비겼습니다.',

            })
        }else if([-1,2].includes(diff)){
            this.setState((prevState)=>{
                return{
                    result:'이겼습니다!',
                    score:prevState.score+1,
                };
               
            })
        }else {
            this.setState((prevState) =>{
                return{
                    result:'졌습니다!',
                    score:prevState.score-1
                }
            })
        }
        setTimeout(()=>{
            this.interval = setInterval(this.changeHand,100);
        },2000);
        
    };

    render(){
        const { result , score , imgCoord } = this.state;
        return(
            <>
                <div id="computer" style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>Rock</button>
                    {/* <button id="rock" className="btn" onClick={() => this.onClickBtn('rock')}>Rock</button> */}
                    <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>Scissor</button>
                    {/* <button id="scissor" className="btn" onClick={() => this.onClickBtn('scissor')}>Scissor</button> */}
                    <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>Paper</button>
                    {/* <button id="paper" className="btn" onClick={() => this.onClickBtn('paper')}>Paper</button> */}
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
               
            </>
        );
    };
}

export default RSP;
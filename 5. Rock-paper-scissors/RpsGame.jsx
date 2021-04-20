import React,{ Component } from 'react'

//클래스의 경우
//constructor -> render -> ref -> componentDidMount  
//->(setState/props  바뀔때 -> shouldComponetUpdate-> render -> compoentDidUpdate )
//->부모 컴포넌트에서 제거시킬때 -> componentWillUnmount -> 소멸


const rspCoords = {
    scissor:'0',
    rock:'-142px',
    paper:'-284px'

};
const scores = {
    scissor:1,
    rock:0,
    paper:-1
}

class RSP extends Component {
    state = {
        result:'',
        score:0,
        imgCoord:0
    };

    interval;

    componentDidMount(){ // 컴포넌트가 첫 렌더링될때 => 보통 비동기 요청을 많이함
      this.interval=setInterval(()=>{
          const {imgCoord} = this.state;
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
          

      },1000);  
    };
    componentDidUpdate(){ //리렌더링시 실행되는부분
        
    };
    componentWillUnmount(){ // 컴포넌트가 제거되기 직전에 => 비동기 요청 정리를 많이넣음.
        clearInterval(this.interval);
    };
    onClickBtn = (choice) =>{

    }

    render(){
        const { result , score , imgCoord } = this.state;
        return(
            <>
                <div id="computer" style={{background: 'url(http://en.pimg.jp/023/182/267/1/23182267.jpg)'}}></div>
                <botton id="rock" className="btn">Rock</botton>
                <botton id="scissor" className="btn">Scissor</botton>
                <botton id="paper" className="btn">Paper</botton>
            </>
        );
    };
}

export default RSP;
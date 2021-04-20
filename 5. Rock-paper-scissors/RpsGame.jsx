import React,{ Component } from 'react'

class RSP extends Component {
    state = {
        result:'',
        score:0,
        imgCoord:0
    };
    componentDidMount(){
        

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
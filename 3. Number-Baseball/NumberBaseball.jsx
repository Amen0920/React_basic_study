const React = require('react');
const { PureComponent } = React;
const Try = require('./Try')


function getNumber(){ // 숫자4개를 겹치지않고 랜덤으로 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i<4 ; i +=1){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends PureComponent{
    state = {
        result : '',
        value : '',
        answer: getNumber(),
        tries:[] 
    
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')){ // 완전 동일할때 
            this.setState((prevState)=>{
                return{
                    result:'홈런',
                    tries:[...prevState.tries, {try: this.state.value, result : '홈런!'}]
                }
            });
            alert('게임을 다시 시작합니다!');
            this.setState({
                value:'',
                answer:getNumber(),
                tries:[],
            }); 
        } else { // 답 틀렸을때 
            const answerArray = this.state.value.split('').map( (v)=> parseInt(v));
            let strike = 0;
            let ball = 0;
            if(this.state.tries.length >=9 ){ //10번이상 틀렸을때 
                this.setState({
                    result : `10번 넘게 시도해서 실패!! 답은 ${this.state.answer.join(',')} 였습니다.`
                })
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value:'',
                    answer:getNumber(),
                    tries:[],
                }); 
            }else {
                for(let i =0 ; i<4; i+=1){
                    if(answerArray[i] === this.state.answer[i]){
                        strike +=1;
                    } else if(this.state.answer.includes(answerArray[i])){
                        ball +=1;
                    }
                }
                this.setState((prevState) => {
                    return{
                        tries:[...prevState.tries,{try : this.state.value, result:`${strike} 스트라이크 ${ball} 볼입니다.`}],
                        value:'',
                    }
                    
                    
                })
            }

        } 
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({ value : e.target.value})
    };

    render(){
        const {result,tries,value } = this.state;
        return(
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput}/>
                
                </form>
                <div>시도 : {tries.length} </div>
                <ul>
                    {tries.map((v,i) => {
                        return( 
                            <Try key={`${i + 1 }차 시도` } tryInfo = {v} />
                        );
                    })}
                </ul>

            </>

        );
    }
}

module.exports = NumberBaseball;
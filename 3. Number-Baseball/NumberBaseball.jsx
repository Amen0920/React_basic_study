import React, {Component} from 'react';

function getNumbers(){ // 숫자4개를 겹치지않고 랜덤으로 뽑는 함수

}

class NumberBaseball extends Component{
    state = {
        result : '',
        value : '',
        answer: getNumber(),
        tries:[]

    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length} </div>
                <ul>
                    <li/>
                </ul>

            </>

        );
    }
}

export default NumberBaseball;
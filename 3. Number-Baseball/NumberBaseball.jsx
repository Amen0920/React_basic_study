const React = require('react');
const Try = require('./Try')


function getNumber(){ // 숫자4개를 겹치지않고 랜덤으로 뽑는 함수

}

class NumberBaseball extends React.Component{
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

    fruits = [
        { fruit : '사과', taste: ' 맛있다'},
        { fruit : '포도', taste: ' 시다'},
        { fruit : '딸기', taste: ' 맛있다'},
        { fruit : '귤', taste: ' 시다'},
        { fruit : '감', taste: ' 떫다'},
        { fruit : '밤', taste: ' 맛없다'},

    ]

    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length} </div>
                <ul>
                    {this.fruits.map((v,i) => {
                        return( 
                            <Try value = {v} index={i} />
                        );
                    })}
                </ul>

            </>

        );
    }
}

module.exports = NumberBaseball;
const React = require('react');


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

    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length} </div>
                <ul>
                    {[
                        { fruit : '사과', taste: ' 맛있다'},
                        { fruit : '포도', taste: ' 시다'},
                        { fruit : '딸기', taste: ' 맛있다'},
                        { fruit : '귤', taste: ' 시다'},
                        { fruit : '감', taste: ' 떫다'},
                        { fruit : '밤', taste: ' 맛없다'},
                        // ['사과','맛있다'],
                        // ['바나나','맛없다'],
                        // ['포도','시다'],
                        // ['귤','시다'],
                        // ['감','떫다'], 
                        // ['배','맛있다'],
                        // ['밤','맛없다']
                    ].map((v,i) => {
                        return(
                            <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste} , {i}</li>
                        );
                    })}
                     
                    
                    {/* // .map( ( v ) => 
                    // <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
                    // )} */}
                
                </ul>

            </>

        );
    }
}

module.exports = NumberBaseball;
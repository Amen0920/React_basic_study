const React = require('react');
const { render } = require('react-dom');

class WordRelay extends React.Component {
    state = {
        word:"리베",
        value:'',
        result:'',
    };
    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length-1] == this.state.value.charAt(0)){
            
            this.setState({
                result:'딩동댕!',
                word: this.state.value,
                value:'',
               
            });
            this.input.focus();
        }else{
            console.log(this.state.word[this.state.word.length-1]+','+this.state.value)
            this.setState({
            
                result:'땡!',
                value:'',
            });
            this.input.focus();
        }
    }

    onChangeInput = (e) => {
        this.setState({value : e.target.value })
    };

    input;
    onRefInput = (c) =>{
       this.input = c;
    }

    render(){
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }

};

module.exports = WordRelay;

const React = require('react');
const { render } = require('react-dom');

class WordRelay extends React.Component {
    state = {
        text:'Hello Webpack',
    };
    render(){
        return (<h1>{this.state.text}</h1>)
    }

};

module.exports = WordRelay;

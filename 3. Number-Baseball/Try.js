const React = require('react');
const { library } = require('webpack');


class Try extends React.Component {
    render(){
        return (
         <li>
             <div>{this.props.tryInfo.try}</div>
             <div>{this.props.tryInfo.result}</div>
         </li>
        )
    }
}

module.exports = Try;
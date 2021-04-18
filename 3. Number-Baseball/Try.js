const React = require('react');
const { PureComponent } = React;


class Try extends PureComponent {
    state = {
        result: this.props.result,
        try: this.props.try,
    };
    
    render(){
        const { tryInfo } = this.props;
        return (
         <li>
             <div>{tryInfo.try}</div>
             <div>{tryInfo.result}</div>
         </li>
        )
    }
}

module.exports = Try;
const React = require('react');



class Try extends React.Component {
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
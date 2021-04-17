const React = require('react');


class Try extends React.Component {
    render(){
        return (
            <li key={this.props.value.fruit + this.props.value.taste}>
                <b>{this.props.value.fruit}</b> - {this.props.value.taste} , {this.props.index}
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
            </li>
        )
    }
}

module.exports = Try;
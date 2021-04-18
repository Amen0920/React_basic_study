const React = require('react');
const {PureComponent} = React;

class Test extends PureComponent {
    state = {
        counter : 0,
        string : 'Hello',
        number : 1,
        boolean : true,
        object : {},
        array: [],
    };

    onClick = () => {
        this.setState((prevState)=>{
            return{
                array:[...prevState.array,1],
            }
        });

    };

    render(){
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick} >클릭</button>
            </div>
        )
    }
}

module.exports = Test;
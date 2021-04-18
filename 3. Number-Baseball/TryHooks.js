
const React = require('react');
const { memo } = React;

const TryHooks = memo(({ tryInfo }) =>{
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div> 
        </li>
    )
})

// const Try =(props) =>{
//     return(
//         <li>
//             <div>{props.tryInfo.try}</div>
//             <div>{props.tryInfo.result}</div>
//         </li>
//     )
// }

module.exports = TryHooks;
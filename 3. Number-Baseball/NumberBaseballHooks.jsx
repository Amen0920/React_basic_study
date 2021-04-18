const { useState , useRef } = require('react');
const React = require('react');
const { memo } = React;
const Try=  require('./TryHooks')

const getNumber=() => { // 숫자4개를 겹치지않고 랜덤으로 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i<4 ; i +=1){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseballHooks = () => {
    const [result,setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer ] = useState(getNumber());
    const [tries, setTries] = useState([]);
    const inputEl = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value === answer.join('')){ // 완전 동일할때 
            setResult('홈런');
            setTries((prevTries)=>{
                return[...prevTries,{try: value , result:'홈런!'}]
            })
            alert('게임을 다시 시작합니다!');
            setValue('');
            setAnswer(getNumber());
            setTries([]);
            inputEl.current.focus();
        } else { // 답 틀렸을때 
            const answerArray = value.split('').map( (v)=> parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >=9 ){ //10번이상 틀렸을때 
                setResult(`10번 넘게 시도해서 실패!! 답은 ${answer.join(',')} 였습니다.`);
                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumber());
                setTries([]);
            }else {
                for(let i =0 ; i<4; i+=1){
                    if(answerArray[i] === answer[i]){
                        strike +=1;
                    } else if(answer.includes(answerArray[i])){
                        ball +=1;
                    }
                }
                setTries((prevTries)=>{
                    return [...prevTries,{try : value, result:`${strike} 스트라이크 ${ball} 볼입니다.`}]
                })
                setValue('');
                    
               
            }

        } 
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return(
       
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref= {inputEl} maxLength={4} value={value} onChange={onChangeInput}/>
                
            </form>
            <div>시도 : {tries.length} </div>
            <ul>
                {tries.map((v,i) => {
                    return( 
                        <Try key={`${i + 1 }차 시도` } tryInfo = {v} />
                    );
                })}
            </ul>

        </>

        );
    

}

module.exports = NumberBaseballHooks;
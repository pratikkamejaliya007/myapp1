import React, { useState } from 'react';

function Cal() {
    const [cal, setCal] = useState('');

    const [ans,setans] = React.useState(cal)

    function handleClick(value) {
            if(cal === ""){
                if( !(value == '*' || value == '/' || value == '+') ){
                    setCal(prevCal => prevCal + value);    
                }
            }else{
                // if(cal[cal.length - 1] == '+' || cal[cal.length - 1] == '-' || cal[cal.length - 1] == '*' || cal[cal.length - 1] == '/'){
                //     // setCal(prevCal => prevCal.slice(0,cal.length-1))
                //     // setCal(prevCal => prevCal + value)
                // }else{
                //     setCal(prevCal => prevCal + value);
                // }
                setCal(prevCal => prevCal + value);
            }

    }


    function del(){
        setCal(prevCal => prevCal.slice(0,cal.length-1))
    }

    function clear() {
        setCal('');
        setans('')
    }

    function final(){
            
        const result= eval(cal)
        setans(result)
    }

    return (
        <>
        <center>
            <h1>Calculator:</h1>
        <div className='cal'>
            <div className='display' id="show">
                {cal}
            </div>
            <div id="ans">
                {ans}
            </div>
            <div className="btn-group">
                <table>
                    <tbody>
                        <tr>
                            <th><button onClick={clear}>C</button></th>
                            <th><button onClick={() => handleClick('%')}>%</button></th>
                            <th><button onClick={del}><i className="ri-delete-back-2-line"></i></button></th>
                            <th><button onClick={()=> handleClick('/')}><i className="ri-divide-line"></i></button></th>
                        </tr>
                        <tr>
                            <th><button onClick={() => handleClick('7')}>7</button></th>
                            <th><button onClick={() => handleClick('8')}>8</button></th>
                            <th><button onClick={() => handleClick('9')}>9</button></th>
                            <th><button onClick={() => handleClick('*')}>*</button></th>
                        </tr>
                        <tr>
                            <th><button onClick={() => handleClick('4')}>4</button></th>
                            <th><button onClick={() => handleClick('5')}>5</button></th>
                            <th><button onClick={() => handleClick('6')}>6</button></th>
                            <th><button onClick={() => handleClick('-')}>-</button></th>
                        </tr>
                        <tr>
                            <th><button onClick={() => handleClick('1')}>1</button></th>
                            <th><button onClick={() => handleClick('2')}>2</button></th>
                            <th><button onClick={() => handleClick('3')}>3</button></th>
                            <th><button onClick={() => handleClick('+')}>+</button></th>
                        </tr>
                        <tr>
                            <th><button onClick={() => handleClick('00')}>00</button></th>
                            <th><button onClick={() => handleClick('0')}>0</button></th>
                            <th><button onClick={() => handleClick('.')}>.</button></th>
                            <th><button onClick={final}>=</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </center>
        </>
    );
}

export default Cal;

import React, { useState, useEffect ,useRef} from 'react';

function Timer() {
    const [second, setSecond] = useState(0);
    const [min,setMin] = useState(0)
    const [mili,setMili] = useState(0)
    const [inter, setInter] = useState(false);

    const [key,setkey]=useState(true)

    // key event
    window.addEventListener("keypress",(e)=>{
        
        if(e.key == 's' || e.key == 'S'){
            if(key){
                setInter(false)
                setkey(false)
            }else{
                setInter(true)
                setkey(true)
            }
        }

        if(e.key == 'r' || e.key == 'R'){
            setMili(0)
            setSecond(0)
            setMin(0)

            setInter(false)
            setkey(false)

        }
    })


    useEffect(() => {
        
        let id;

        if(inter){

            id = setInterval(()=>{

                setSecond(prevsecond => {
                    const newsecond = prevsecond + 1;
                    
                    return newsecond >= 60 ? 0 : newsecond   

                })

            },1000)

        }

            return () => clearInterval(id);
        

        
    }, [inter]);

    useEffect(()=>{

        let id1;

        if(inter){

            id1 = setInterval(()=>{

                setMin(prevmin => {
                    const newmin = prevmin + 1;
                    
                    return  newmin   

                })

            }, 60000 )

        }
        
        return () => clearInterval(id1)

    },[inter])

    useEffect(()=>{

        let id2;

        if(inter){
            id2 = setInterval(() => {
                
                setMili(
                    prevmili => {
                    const newmili = prevmili + 1
                    return newmili >= 60 ? 0 : newmili
                })


            }, 0);
        }

        return () => clearInterval(id2)

    },[inter])

    const stopTimer = () => {
        setInter(false);
    };

    const reset = () =>{
        setInter(false)
        setSecond(0)
        setMin(0)
        setMili(0)
    }

    const start = () => {
        setInter(true)
    }

    return (
        <div className='perents'>
        <div className='main'>

        <section>
                <div className='text'>
                <h2>{
                min > 9 ? min : "0"+min
                }</h2>
                <h4>MIN</h4>
                </div>

                <div className='text'>
                    <h2>
                    {
                    second > 9 ? second : "0"+ second
                    }
                    </h2>
                    <h4>SEC</h4>
                </div>
                

                <div className='text'>
                    <h2>
                    {
                    mili > 9 ? mili : "0"+ mili
                    }
                    </h2>
                    <h4>MILISEC</h4>
                </div>
                </section>
           <div className='btn-group'>
            <button onClick={stopTimer} className='btn-1'>Stop</button>

            <button onClick={reset} className='btn-2'>Reset</button>

            <button onClick={start} className='btn-3'>Start</button>
                
            </div>     

        </div>
        </div>
    );
}

export default Timer;

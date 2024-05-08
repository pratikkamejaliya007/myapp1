import React,{useState , useEffect} from 'react'

function Todo() {

    const [inputvalue,setInputvalue]=useState('')
    const [data,setData]=useState([])

    function add(){

        let newdata={
            Task:inputvalue
        }

        setData([...data,newdata])
        console.log(data )
        setInputvalue('')
    }

    useEffect(() => {
        let prevdata = JSON.parse(sessionStorage.getItem('Todo'));
        if (prevdata) {
          setData(prevdata);
        }
      }, []);
    
    useEffect(()=>{

        
    let prevdata=JSON.parse(sessionStorage.getItem("Todo"))

    if(prevdata){
        setData(prevdata)
    }

    },[data])
    
    localStorage.setItem("Todo",JSON.stringify(data))   


  return (
    <>

    <center>
    <div style={{
        margin:'10px'
    }}>
        <input type="text" value={inputvalue} placeholder='Enter Task' onChange={(e)=>setInputvalue(e.target.value)} className='input_1' />

        <button onClick={add}>add</button>
    </div>
    </center>
    
    <center>
        
        <ul style={{width:'100px'}}>
            {
                data && data.map((el)=>(
                    <li key={el.Task}>{el.Task}</li>
                ))
            }
        </ul>
        
    </center>

    </>
  )
}

export default Todo
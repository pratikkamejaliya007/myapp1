import React from 'react'
import { useState ,useEffect } from 'react'


function Sign() {

  // const [data,setdata]=useState([])

  // const [name,setname]=useState('')

  // const [pass,setpass]=useState('')

  // const [conf,setconf]=useState('')

  // const submit = (e) =>{

  //   e.preventDefault()    

  //   if(pass == conf){

  //     e.preventDefault()

  //   data.push({ 
  //     UserName:name,
  //     Password:pass
  //   })

  //   localStorage.setItem("DATA",JSON.stringify(data))

  //   setname('')
  //   setpass('')
  //   setconf('')


  // }else{
  //   alert("Please write correct password")
  // }

  // }

  // useEffect(()=>{
  //     let storedData = JSON.parse(localStorage.getItem("DATA"))
  
  //     if (storedData !== null) {
  //       setdata(storedData);
  //     }

  // },[])


  return (
    <div>
      
      {/* <div className='sing'>
        <form action="" onSubmit={submit}>

            <h1 style={{textAlign:'center'}}>Sign Up</h1>

            <label htmlFor="" style={{marginLeft:'25px'}}>Username:</label> <br />
            <div className="mail">
            <i class="ri-user-2-fill"></i>
            
            <input type="text" name=""   onChange={(e)=>{setname(e.target.value)}}  placeholder='Typey our username' />

            </div>

            <label htmlFor="" style={{marginLeft:'25px'}}>Password:</label> <br />

            <div className="mail">
            <i class="ri-lock-2-line"></i>
            <input type="text" name="" onChange={(e)=>{setpass(e.target.value)}} placeholder='Type your Password' />
            </div>

            <label htmlFor="" style={{marginLeft:'25px'}}>Conform Password:</label> <br />

                <div className="mail">
                <i class="ri-lock-2-line"></i>
                <input type="text" name="" onChange={(e)=>{setconf(e.target.value)}} placeholder='Type your Conform Password' />
            </div>


            <a href="" >Sing Up</a>

            <button type='submit'  className='btn-1'  >SUBMIT</button>

        </form>
      </div> */}

    

    </div>
  )
}

export default Sign

import React from 'react'
import { useState , useEffect} from 'react'

import FetchData from './FetchData'

function Login(props) {

    // login

    const [log,setlog]=useState(true)

    const [rename,setrename]=useState('')

    const [repass,setrepass]=useState('')

    const [value_1,setvalue_1]=useState(false)

    const [value_2,setvalue_2]=useState(false)

    const [sign,setsign]=useState(false)

    const [singdata,setsingdata]=useState(true)

    let storedData = JSON.parse(localStorage.getItem("DATA"))

    const submit_1 = (e) =>{

      e.preventDefault()

      let a  = storedData.some(obj => obj.UserName === rename);

      let b = storedData.some(obj => obj.Password === repass);
      
      if(a && b){
        alert("Loggin is sussfully")
      }else{
        alert("wrong password")
      }

      setvalue_1(a)

      setvalue_2(b)

    }

    function logout(){
      setvalue_1(false)
      setvalue_2(false)
      setsign(false)
    }

    function singin(){
      setsign(true)  
    }
    
    // signin

    
  const [data,setdata]=useState([])

  const [name,setname]=useState('')

  const [pass,setpass]=useState('')

  const [conf,setconf]=useState('')

  const [err,setErr]=useState({
    username:'',
    Password:''
  })

  let submit = (e) =>{

    e.preventDefault()    

    if(pass == conf){

      e.preventDefault()

    data.push({ 
      UserName:name,
      Password:pass
    })

    localStorage.setItem("DATA",JSON.stringify(data))

    setname('')
    setpass('')
    setconf('')


    setsingdata(false)

  }else{
    alert("Please write correct password")
  }

  }

  useEffect(()=>{
      let storedData = JSON.parse(localStorage.getItem("DATA"))
  
      if (storedData !== null) {
        setdata(storedData);
      }

  },[])


  return (
    <>

      {
        
        sign ?
        (
          singdata ?
          (
            <>
            <center>
              <div className='sing'>
        <form action="" onSubmit={submit}>

            <h1 style={{textAlign:'center'}}>Sign Up</h1>

            <label htmlFor="" style={{marginLeft:'25px'}}>Username:</label> <br />
            <div className="mail">
            <i class="ri-user-2-fill"></i>
            
            <input type="text" name=""   onChange={(e)=>{setname(e.target.value)}}  placeholder='Type our username' />

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


            {/* <a href="#" onClick={showdata}>Sing Up</a> */}

            <button type='submit'  className='btn-1' >SUBMIT</button>

        </form>
      </div>
      </center>
            </>
          )
          :
          (
            <>

<button onClick={logout} className='logout'>LOG OUT</button>

            {/* <FetchData /> */}

            
            </>
          )
        
        )
        :
        
        (
          (value_1 && value_2) ?
          (
            <>
              <button onClick={logout} className='logout'>LOG OUT</button>

              {/* <FetchData /> */}

            </>
          )
          :
          (
            <>
            <center>
            <div className='sub'>
        <form action="" onSubmit={submit_1}>

            <h1 style={{textAlign:'center'}}>Login</h1>

            <label htmlFor="" style={{marginLeft:'25px'}}>Username:</label> <br />
            <div className="mail">
            <i class="ri-user-2-fill"></i>
            <input type="text" name="" onChange={(e)=>setrename(e.target.value)} placeholder='Type our username' />
            </div>

            <label htmlFor="" style={{marginLeft:'25px'}}>Password:</label> <br />

            <div className="mail">
            <i class="ri-lock-2-line"></i>
            <input type="text" name="" onChange={(e)=>setrepass(e.target.value)} placeholder='Type your Password' />
            </div>

            <a href="#" onClick={singin}>Sing Up</a>

            <button type='submit' className='btn-1' >LOGIN</button>

        </form>
      </div>
      </center>
            </>
          )
        )

        

      }

    </>
  )
}


export default Login

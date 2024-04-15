import React from 'react'
import { useState , useEffect} from 'react'

function Login() {

    const [log,setlog]=useState(true)
    useEffect(()=>{
        localStorage.setItem("Log",JSON.stringify())
    })

    function login(){
        setlog(false)
    }

    function logout(){
        setlog(true)
    }

  return (
    <>

    {
        log ? 
        <div>
            <h1>LOG IN</h1>
            <button onClick={login}>LOG IN</button>
        </div>
        :
        <div>
            <h1>LOG OUT</h1>
            <button onClick={logout}>LOG OUT</button>
        </div>
    }
      
      <div className='sub'>
        <form action="">

            <h1 style={{textAlign:'center'}}>Login</h1>

            <label htmlFor="" style={{marginLeft:'25px'}}>Username:</label> <br />
            <div className="mail">
            <i class="ri-user-2-fill"></i>
            <input type="text" name="" id="mail" placeholder='Typey our username' />
            </div>

            <label htmlFor="" style={{marginLeft:'25px'}}>Password:</label> <br />

            <div className="mail">
            <i class="ri-lock-2-line"></i>
            <input type="text" name="" id="pass" placeholder='Type your Password' />
            </div>

            <a href="" >Sing Up</a>

            <button type='submit' className='btn-1' >LOGIN</button>

        </form>
      </div>

    </>
  )
}


export default Login

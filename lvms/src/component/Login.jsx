import React from 'react'
import { useState } from 'react'
import Data from './Data'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Login() {

    const[showpass,setShowpass]=useState(false)

    const [showdata,setShowdata]=useState(false)

    const [user,setUser]=useState('')

    const [pass,setPass]=useState('')

    function change(){
      if(showpass){
        setShowpass(false)
      }else{
        setShowpass(true)
      }
    }

    function submit(e){

      e.preventDefault()

      if(user == 'pratik' && pass == '123'){
        setShowdata(true)
      }

    }

  return (
    <>



    {
    showdata ?(
      <>
      <Data/>
      </>
    ):
    (
      <>
      <section className=' border border-dark d-flex align-items-center justify-content-center m-5'>
        <div className=' border border-dark me-auto p-2' style={{height:'250px'}}>

            <form action="" className='w-100 h-100' onSubmit={submit}>

                <h3 className='text-center m-3'>login</h3>

              <div className='in_1 d-flex'>
                  <input type="text" placeholder='Enter Username' className='h-100 w-75 ps-2' onChange={(e)=>setUser(e.target.value)}/>
                  <section className='h-100 w-25 d-flex align-items-center justify-content-center'>
                      <i className="ri-user-line fs-3 opacity-50"></i>
                  </section>
              </div>

              <div className='in_1 d-flex mt-4'>
                  <input type={showpass ? "text":"password"} placeholder='Enter Password' className='h-100 w-75 ps-2' onChange={(e)=>{setPass(e.target.value)}}/>
                  <section className='h-100 w-25 d-flex align-items-center justify-content-center' onClick={change}>
                      <i className={showpass ? "ri-eye-line fs-3 opacity-50" : "ri-eye-off-line fs-3 opacity-50"} ></i>
                  </section>
              </div>

              <button type='submit' className='bg-success text-light mt-2 ms-4'>Login</button>

              {/* <a href="" className='ms-5 mb-2'>Forget Password ?</a>   */}

            </form>

        </div>
        </section>
      </>
    )
    
  }

    </>
  )
}

export default Login

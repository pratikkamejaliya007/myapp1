import React from 'react'
import { useState } from 'react'

function Valid_form() {

    const[Form,setForm]=useState({
                Username:'',
                Email:'',
                Password:''
            })

    const [err,setErr]=useState({})
        
            function handlechange(e){
        
                const {name,value}= e.target
        
                setForm({
                    ... Form ,
                    [name] : value
                })
        
            }
        
            function handlesubmit(e){
        
                e.preventDefault()
        
                // console.log(Form)

                const err=validate(Form)

                setErr(err)

                if (Object.keys(err).length === 0) {
                 
                    alert("Form is valid");
                 
                } else {
                    console.log("Form has validation errors");
                }
        
            }


            function validate(value){

                let error={}

                let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

                if(value.Username.trim() == 0){
                    error.Username="Fill Username"
                }

                if(!regex.test(value.Email)){
                    error.Email="Not Valid mail"
                }

                if(!value.Password){
                    error.Password="Fill password"
                }else if(value.Password.length < 8){
                    error.Password="Minimum 8 characters required for password"
                }

                return error

            }
        


  return (
    <div>
        
        <form action="" onSubmit={handlesubmit}>

             <input type="text" name="Username" value={Form.Username} placeholder='Enter username' onChange={handlechange} /> 
             
             <span style={{color:'red'}}>{err.Username}</span>

             <br />

             <input type="text" name="Email" value={Form.Email} placeholder='Enter Email' onChange={handlechange} /> <br />

             <span style={{color:'red'}}>{err.Email}</span>

             <input type="text" name="Password" value={Form.Password} placeholder='Enter Password' onChange={handlechange} /> <br />

             <span style={{color:'red'}}>{err.Password}</span>
            
             <button type='submit'>Submit</button>

         </form>



    </div>
  )
}

export default Valid_form

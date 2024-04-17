import React from 'react'
import { useState ,useEffect } from 'react'


function Sign() {

const [data,setdata]=useState([])
  
const [mail,setmail]=useState('')    

const [pass,setpass]=useState('')    


// useEffect(() => {

  
// }, [mail, pass]);



  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('mail', mail);
    localStorage.setItem('pass', pass);


  };
  

  return (
    <div>
      
      <div className='sing'>
        <form action="" onSubmit={(e) => e.preventDefault()}>

            <h1 style={{textAlign:'center'}}>Sign Up</h1>

            <label htmlFor="" style={{marginLeft:'25px'}}>Username:</label> <br />
            <div className="mail">
            <i class="ri-user-2-fill"></i>
            
            <input type="text" name="" value={mail}  onChange={(e) => setmail(e.target.value)}  id="mail" placeholder='Typey our username' />

            </div>

            <label htmlFor="" style={{marginLeft:'25px'}}>Password:</label> <br />

            <div className="mail">
            <i class="ri-lock-2-line"></i>
            <input type="text" name="" value={pass} onChange={(e) => setpass(e.target.value)} id="pass" placeholder='Type your Password' />
            </div>

            <label htmlFor="" style={{marginLeft:'25px'}}>Conform Password:</label> <br />

                <div className="mail">
                <i class="ri-lock-2-line"></i>
                {/* <input type="text" name="" id="pass" placeholder='Type your Conform Password' /> */}
            </div>


            {/* <a href="" >Sing Up</a> */}

            <button type='submit'  className='btn-1' >SUBMIT</button>

        </form>
      </div>

    </div>
  )
}

export default Sign

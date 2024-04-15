import React from 'react'

function Sign() {
  return (
    <div>
      
      <div className='sing'>
        <form action="">

            <h1 style={{textAlign:'center'}}>Sign Up</h1>

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

            <label htmlFor="" style={{marginLeft:'25px'}}>Conform Password:</label> <br />

                <div className="mail">
                <i class="ri-lock-2-line"></i>
                <input type="text" name="" id="pass" placeholder='Type your Conform Password' />
            </div>


            {/* <a href="" >Sing Up</a> */}

            <button type='submit' className='btn-1' >SUBMIT</button>

        </form>
      </div>

    </div>
  )
}

export default Sign

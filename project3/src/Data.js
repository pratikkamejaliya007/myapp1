import React from 'react'
import { useState } from 'react'

function Data(props) {

    const [log,setlog]=useState(true)

    function login(){
        setlog(true)
    }

    function logout(){
        setlog(false)
    }

  return (
    <div>
        

        {
            log?(
            <>
                  <div>
                    <h4>LOG IN</h4>
                    <button onClick={logout} className='logout'>logout</button>

                    <section>
                    <center>
                    <table>

                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>expiry (year)</th>
                </tr>
                    {
                
                props.data && props.data.map((el)=>(
                    <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.quantity}</td>
                        <td>{el.price}</td>
                        <td>{el.expiry}</td>
                    </tr>
                ))
                       
                    }
                    </table>
</center>
        </section>

                    </div>
            </>)
            :
(<>
            <div>
        <h4>LOG OUT</h4>
        <button onClick={login} className='login'>login</button>
     </div>

            </>)
        }

     
    </div>
    
  )
}

export default Data
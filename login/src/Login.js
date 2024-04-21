import React from 'react'
import { useState , useEffect} from 'react'

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

      console.log(storedData)

      // const a = storedData.filter((el)=>{
      //   return (el.UserName === rename && el.Password === repass)
      // })

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
    console.log(sign)

    
    // signin

    
  const [data,setdata]=useState([])

  const [name,setname]=useState('')

  const [pass,setpass]=useState('')

  const [conf,setconf]=useState('')

  let submit = (e) =>{

    e.preventDefault()    

    if(pass == conf){

      e.preventDefault()

    data.push({ 
      UserName:name,
      Password:pass
    })

    localStorage.setItem("DATA",JSON.stringify(data))

    // const newData = [...data, { UserName: name, Password: pass }];
    // localStorage.setItem("DATA", JSON.stringify(newData));

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
              <div className='sing'>
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


            {/* <a href="#" onClick={showdata}>Sing Up</a> */}

            <button type='submit'  className='btn-1' >SUBMIT</button>

        </form>
      </div>

            </>
          )
          :
          (
            <>

<button onClick={logout} className='logout'>LOG OUT</button>

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
            
            </>
          )
        
        )
        :
        
        (
          (value_1 && value_2) ?
          (
            <>
              <button onClick={logout} className='logout'>LOG OUT</button>

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

            </>
          )
          :
          (
            <>
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
            </>
          )
        )

        

      }

    </>
  )
}


export default Login

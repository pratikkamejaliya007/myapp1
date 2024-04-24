// import React from 'react'
// import { useState } from 'react'

// function Form_styling() {

//     const[Form,setForm]=useState({
//         Username:'',
//         Email:'',
//         Password:''
//     })

//     function handlechange(e){

//         const {name,value}= e.target

//         setForm({
//             ... Form ,
//             [name] : value
//         })

//     }

//     function handlesubmit(e){

//         e.preventDefault()

//         console.log(Form)

//     }


//   return (
//     <div>

//         <form action="" onSubmit={handlesubmit}>

//             <input type="text" name="Username" value={Form.Username} placeholder='Enter username' onChange={handlechange} /> <br /><br />

//             <input type="text" name="Email" value={Form.Email} placeholder='Enter Email' onChange={handlechange} /> <br /><br />

//             <input type="text" name="Password" value={Form.Password} placeholder='Enter Password' onChange={handlechange} /> <br /><br />
            
//             <button type='submit'>Submit</button>

//         </form>
      
//     </div>
//   )
// }

// export default Form_styling

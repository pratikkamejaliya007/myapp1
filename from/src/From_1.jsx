// import React from 'react'
// import { useState } from 'react'

// function From_1() {

//     const [name,setName]=useState("")

//     const [mail,setMail]=useState("")

//     const [password,setPassword]=useState("")

//     function submit(e){

//         e.preventDefault()

//         // mail.style.background="red"

//         console.log(`${name}
//             ${mail}
//             ${password}
//         `)

//     }


//   return (
//     <div>

//             <h3 style={{textAlign:'center'}}>Control Form</h3>

//         <center>

//         <form action="" onSubmit={submit}>

//             <label htmlFor="">Enter Name:</label> <br />

//             <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Name'/> <br />

//             <label htmlFor="">Enter E-mail:</label> <br />

//             <input type="mail" value={mail} onChange={(e)=> setMail(e.target.value)} placeholder='Enter E-mail'/> <br />

//             <label htmlFor="">Enter Password:</label> <br />

//             <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password'/> <br />

//             <button type='submit'>Submit</button>

//         </form>
//         </center>

       

//     </div>
//   )
// }

// export default From_1
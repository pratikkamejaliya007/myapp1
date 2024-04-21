// import React from 'react'
// import { useState , useEffect} from 'react'

// function Add() {

//     const [name,setname]=useState('')
//     const [pass,setpass]=useState('')

//     // console.log(name)

//     // console.log(pass)

//     const [arr,setarr]=useState([])

//     const [obj,setaobj]=useState({
//         name:name,
//         phone:pass
//     })


//     // useEffect(()=>{
        
//     const sub =() => {
//         arr.push({
//             name:name,
//             password:pass
//         })

//         setname('')
//         setpass('')

//         localStorage.setItem("Data",JSON.stringify(arr))

//         console.log(arr)
        
//     }

//     // })

//   return (
//     <div>

//     <button onClick={sub}>add</button>

//     <input type="text" onChange={(e)=> setname(e.target.value)} />

//     <input type="text" name="" onChange={(e)=> setpass(e.target.value)} />

//     <h1>{obj.name}</h1>

//     <h1>{obj.phone}</h1>

//     </div>
//   )
// }

// export default Add
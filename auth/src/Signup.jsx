import React from 'react'
import { useState,useEffect } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth , provider } from './config'

function Signup() {

    const [value,setValue]=useState('')

    const handlesing = () =>{

        signInWithPopup(auth,provider)
        .then((data)=>{

            setValue(data.user.email)

            localStorage.setItem('email',data.user.email)

        }).catch((err)=>{
            console.log(err)
        })

    }

  return (
    <>

        <button onClick={handlesing}>GOOGLE</button>

    </>
  )
}

export default Signup
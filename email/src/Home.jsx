import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from './config';
import { useNavigate } from 'react-router-dom'

function Home() {
  
    const navigate=useNavigate()

    function handlelogout(){

      signOut(auth).then(() => {
        console.log('Sign-out successful.')
        navigate('/login')
      }).catch((error) => {
        console.log("error")
      });

    }


  return (
    <div>Home


      <button onClick={handlelogout}>LOG OUT</button>

    </div>
  )
}

export default Home
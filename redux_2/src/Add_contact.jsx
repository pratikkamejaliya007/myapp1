import React, { useRef, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { add } from './redux/action';
import { useNavigate } from 'react-router-dom';

function Add_contact() {

    const selector=useSelector(state => state.data)

    const dispatch=useDispatch()

    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const [mail,setMail]=useState('')
    const [profile,setProfile]=useState(null)

    const navigate=useNavigate()

    function handlesubmit(e){

        e.preventDefault()

        const newdata = {
            // id:Date.now(),
            name,
            number,
            mail,
            profile
        }

        dispatch(add(newdata))

        setName('')
        setNumber('')
        setMail('')

        navigate('/')

    }

    function handleimg(e){
        setProfile(e.target.files[0])
    }

  return (
    <form className="form-container" onSubmit={handlesubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Enter your name"
          value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="text"
          id="number"
          className="form-input"
          placeholder="Enter your number"
          value={number}
        onChange={(e)=>setNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="profile" className="form-label">
          Profile
        </label>
        <input
          type="file"
          id="profile"
          className="form-input"
          placeholder="Enter profile URL"
          onChange={handleimg}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Enter your email"
          value={mail}
        onChange={(e)=>setMail(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <button
          type="submit"
          className="form-button"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
}

export default Add_contact;

// src/components/Email_signup.js
import React, { useState, useEffect } from 'react';
import { auth } from './config';
import { useNavigate } from 'react-router-dom';
import { sendSignInLinkToEmail, signInWithEmailLink, isSignInWithEmailLink } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { setprivet  } from './redux-toolkit/privetrouter';

function Email_signup() {

  const dispatch=useDispatch()

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate=useNavigate()

  const actionCodeSettings = {
    
    url: 'http://localhost:3000/', // Change this to your app's URL
    handleCodeInApp: true,

  };

  useEffect(() => {
    // Check if the user is signing in with a link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem('emailForSignIn');
          setMessage('Sign-in successful');
          dispatch(setprivet())
          // navigate('/')
        })
        .catch((error) => {
          setMessage(error.message);
          toast.error(message)
        });
    }
  }, []);

  const handleSignUp = (event) => {
    event.preventDefault();
    
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        setMessage('Sign-in link sent to your email');
        toast.success('Sign-in link sent to your email')
      })
      .catch((error) => {
        setMessage(error.message);
        toast.error(message)
      });
    dispatch(setprivet())
    navigate('/')
  };

  function handleclick() {
    toast.success('Sign-in successful')
  }

  return (
    <div>
      {/* <h1>Sign Up with Email Link</h1> */}
      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{width:'250px'}}
          />
        </div>
        <button type="submit">Send Sign-In Link</button>
      </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <button onClick={handleclick}>click</button>
      {/* {message && <p>{message}</p>} */}
    </div>
  );
}

export default Email_signup;

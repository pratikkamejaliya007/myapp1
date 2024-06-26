import React, { useState } from 'react';
import { signInWithPopup, fetchSignInMethodsForEmail, linkWithCredential, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from './config';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        navigate('/login');
      });
  };

  const handleGitHubSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      setValue(result.user.email);
      localStorage.setItem('email', result.user.email);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        const email = error.customData.email;
        const pendingCredential = GithubAuthProvider.credentialFromError(error);

        // Fetch all the sign-in methods linked to this email
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length > 0) {
          // If the user has previously signed in with a different provider, show a message or a link to the sign-in page
          alert(`You already have an account with ${methods[0]}. Please sign in with ${methods[0]} first and then link your GitHub account.`);

          // Example: If the user previously signed in with Google
          if (methods.includes(GoogleAuthProvider.PROVIDER_ID)) {
            const googleResult = await signInWithPopup(auth, googleProvider);
            await linkWithCredential(googleResult.user, pendingCredential);
            setValue(googleResult.user.email);
            localStorage.setItem('email', googleResult.user.email);
            navigate('/');
          }
        }
      } else {
        console.log(error);
        navigate('/login');
      }
    }
  };

  return (
    <>
      <button onClick={handleSignIn}>
      Sign in with Google
      </button>
      <button onClick={handleGitHubSignIn}>
        Sign in with GitHub
      </button>
    </>
  );
}

export default Signup;

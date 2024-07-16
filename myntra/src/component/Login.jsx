import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../config';
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import google from '../img/google.png';
import { login } from '../redux/Loginslice';

const LoginSignup = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);    
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onCaptchVerify();
  }, []);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          handleContinue();
        },
        'expired-callback': () => {}
      });
    }
  }

  function handleContinue(e) {
    e.preventDefault();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = '+91' + mobile;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        setIsOtpSent(true);
        toast.success('OTP sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to send OTP. Please try again.');
      });
  }

  function handleVerify(e) {
    e.preventDefault();
    if (confirmationResult) {
      confirmationResult.confirm(otp)
        .then((result) => {
          console.log(result.user);
          dispatch(login());
          navigate('/');
          toast.success('OTP verified successfully!');
        })
        .catch((error) => {
          console.error(error);
          toast.error('Invalid OTP. Please try again.');
        });
    } else {
      toast.error('Please request OTP first.');
    }
  }

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        localStorage.setItem('email', data.user.email);
        dispatch(login());
        navigate('/');
        toast.success('Signed in successfully!');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Failed to sign in. Please try again.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="flex justify-center">
          <button onClick={handleSignIn}>
            <img src={google} alt="Google Sign-In" className="w-[35px] mx-auto" />
          </button>
        </div>
        <div className="text-center my-4">
          <h2 className="text-xl font-semibold">Login or Signup</h2>
          <form onSubmit={isOtpSent ? handleVerify : handleContinue} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  +91
                </span>
                <input 
                  type="text" 
                  id="mobile" 
                  className="pl-12 p-3 w-full border rounded text-gray-700 focus:outline-none focus:border-blue-500" 
                  placeholder="Mobile Number" 
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  disabled={isOtpSent}
                />
                <div id='recaptcha-container'></div>
              </div>
            </div>
            {isOtpSent && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                  Enter OTP
                </label>
                <input 
                  type="text" 
                  id="otp" 
                  className="p-3 w-full border rounded text-gray-700 focus:outline-none focus:border-blue-500" 
                  placeholder="Enter OTP" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}
            <div className="text-center text-sm text-gray-600">
              By continuing, I agree to the <a href="#" className="text-red-500">Terms of Use</a> & <a href="#" className="text-red-500">Privacy Policy</a>
            </div>
            <div className="mt-4">
              <button 
                type="submit" 
                className="w-full bg-pink-500 text-white py-3 rounded focus:outline-none focus:shadow-outline"
              >
                {isOtpSent ? 'VERIFY' : 'CONTINUE'}
              </button>                        
            </div>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            Have trouble logging in? <a href="#" className="text-red-500">Get help</a>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default LoginSignup;

import React, { useState , useEffect } from 'react';
import { auth } from '../config';
import { RecaptchaVerifier , signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/Loginslice'
import { useDispatch } from 'react-redux';

const LoginSignup = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const [confirmationResult, setConfirmationResult] = useState(null);    
  const navigate=useNavigate()
  const dispatch=useDispatch()

    useEffect(() => {
        onCaptchVerify();
    }, []);

    function onCaptchVerify(){
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    handleContinue()
                },
                'expired-callback': () => {}
              });
        }
    }

    function handleContinue(e){

        e.preventDefault();

        const appVerifier = window.recaptchaVerifier;
        const phoneNumber = '+91' +  mobile;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                setConfirmationResult(confirmationResult);
                setIsOtpSent(true);
                // toast.success('OTP sent successfully!');
            })
            .catch((error) => {
                console.log(error);
                // toast.error('Failed to send OTP. Please try again.');
            });

    }


    function handleVerify(e) {

        e.preventDefault();

        if (confirmationResult) {
            confirmationResult.confirm(otp)
                .then(async (result) => {
                    console.log(result.user);
                    navigate('/')
                    dispatch(login())
                    // toast.success('OTP verified successfully!');
                })
                .catch((error) => {
                    console.log(error);
                    // toast.error('Invalid OTP. Please try again.');
                });
        } else {
            // toast.error('Please request OTP first.');
        }
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="relative">
          <img 
            src="https://via.placeholder.com/400x150" 
            alt="Offer Banner" 
            className="w-full h-auto rounded-t"
          />
          <div className="absolute top-0 left-0 bg-red-500 text-white p-2 rounded-bl rounded-tr">
            ₹400 OFF
          </div>
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
    </div>
  );
};

export default LoginSignup;

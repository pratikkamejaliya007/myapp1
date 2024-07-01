// src/Login.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './config';
import { RecaptchaVerifier , signInWithPhoneNumber } from 'firebase/auth';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);        

    useEffect(() => {
        onCaptchVerify();
    }, []);

    function onCaptchVerify(){
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                  onSignup()
                },
                'expired-callback': () => {}
              });
        }
    }

    function onSignup(){

        const appVerifier = window.recaptchaVerifier;
        const phoneNumber = '+' +  mobile;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                setConfirmationResult(confirmationResult);
                toast.success('OTP sent successfully!');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Failed to send OTP. Please try again.');
            });

    }

    function otpVerify() {
        if (confirmationResult) {
            confirmationResult.confirm(otp)
                .then(async (result) => {
                    console.log(result.user);
                    toast.success('OTP verified successfully!');
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Invalid OTP. Please try again.');
                });
        } else {
            toast.error('Please request OTP first.');
        }
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <label htmlFor="mobile">Mobile Number</label>
            {/* <PhoneInput
                country={'in'}
                value={mobile}
                onChange={phone => setMobile(phone)}
                inputProps={{
                    name: 'mobile',
                    required: true,
                    autoFocus: true
                }}
            /> */}
         <input 
                    type="text" 
                    id="mobile" 
                    name="mobile" 
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required 
                    pattern="[0-9]{10}" 
                    placeholder="Enter your mobile number" 
                />

                <Toaster
                position="top-center"
                reverseOrder={false}
                />

            <div id="recaptcha-container"></div>
            <button onClick={onSignup}>Send OTP</button>
            <br />
            <label htmlFor="otp">OTP</label>
            <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter the OTP received"
            />
            <button onClick={otpVerify}>Verify OTP</button>
        </div>
    );
}

export default Login;

// src/components/FormComponent.js

import React, { useState, useEffect } from 'react';
import './FormComponent.css';
import { database } from './config'; // Ensure this is correctly exported and imported
import { ref, set, child, get, onValue } from "firebase/database";
import Display from './Display';

const FormComponent = () => {

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newdata = ref(database, `users/${name}`);

    set(newdata, { name, email, message })
      .then(() => {
        console.log("Data saved successfully");
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

            {/* {
                data.map((el)=>(
                    <h1 key={el.name}>{el.name}</h1>
                ))
            } */}
    <Display name={name}/>
    </div>
  );
};

export default FormComponent;

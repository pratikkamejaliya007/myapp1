import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from './redux/action';

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');

  const contacts = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleAddContact = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      number,
      mail
    };

    dispatch(add(newContact));

    // Reset input fields
    setName('');
    setNumber('');
    setMail('');
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleAddContact}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter Contact Number"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.number} - {contact.mail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

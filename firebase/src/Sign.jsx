// src/components/FormComponent.js

import React, { useState, useEffect } from "react";
import "./FormComponent.css";
import { database } from "./config"; // Ensure this is correctly exported and imported
import { ref, set, update as firebaseUpdate, remove } from "firebase/database";
import Display from "./Display";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    setName("");
    setEmail("");
    setMessage("");
  };

  const deletedata = (username) => {
    const useref = ref(database, `users/${username}`);
    remove(useref)
      .then(() => {
        console.log(`${username} deleted`);
      })
      .catch((err) => {
        console.log("err");
      });
  };

  const update = (username) => {
    const itemRef = ref(database, `users/${name}`);
    firebaseUpdate(itemRef, { username })
      .then(() => {
        console.log("sussfully updated");
        // setPopupVisible(false);
        // Additional logic if needed after update
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
    console.log(username);
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

      <Display name={name} deletedata={deletedata} update={update} />
    </div>
  );
};

export default FormComponent;

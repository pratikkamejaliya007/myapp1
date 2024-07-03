import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { database } from './config';

function Display({ name }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userRef = ref(database, `users/${name}`);

    const unsubscribe = onValue(userRef, (snapshot) => {
      const data1 = snapshot.val();
      if (data1) {
        const result = Object.keys(data1).map((key) => data1[key]);
        setData(result);
      } else {
        setData([]);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [name]);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Display;

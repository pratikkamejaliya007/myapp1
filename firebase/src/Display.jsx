import React, { useEffect, useState } from 'react';
import { ref, onValue, update as firebaseUpdate } from "firebase/database";
import { database } from './config';

function Display({ name, deletedata , update}) {
  const [data, setData] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({ name: '', email: '', message: '' });

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

  const handleUpdateClick = (item) => {
    setCurrentItem(item);
    setPopupVisible(true);
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
    update(currentItem)
    // console.log(currentItem)
  };

  const handleUpdateSubmit = () => {
    const itemRef = ref(database, `users/${name}/${currentItem.name}`);
    firebaseUpdate(itemRef, currentItem)
      .then(() => {
        setPopupVisible(false);
        // Additional logic if needed after update
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
  };

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
              <td><button onClick={() => handleUpdateClick(item)}>Update</button></td>
              <td><button className='bg-red-500' onClick={() => deletedata(item.name)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Update Data</h2>
            <label>
              Name:
              <input type="text" name="name" value={currentItem.name} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={currentItem.email} onChange={handleInputChange} />
            </label>
            <label>
              Message:
              <input type="text" name="message" value={currentItem.message} onChange={handleInputChange} />
            </label>
            <button onClick={handleUpdateSubmit}>Submit</button>
            <button onClick={() => setPopupVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;

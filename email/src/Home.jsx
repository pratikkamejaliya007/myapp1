import React, { useState, useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from './config';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setpublic } from './redux-toolkit/privetrouter';
import axios from 'axios';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlelogout() {
    signOut(auth).then(() => {
      console.log('Sign-out successful.');
      dispatch(setpublic());
      navigate('/login');
    }).catch((error) => {
      console.log("error");
    });
  }

  const [data, setData] = useState([]);

  console.log(data);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setData(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="p-4">
      <button onClick={handlelogout} className="absolute right-0 top-0 m-4 px-4 py-2 bg-blue-500 text-white rounded">LOG OUT</button>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {data.map((el) => (
          <div key={el.id} className="border p-4 rounded shadow">
            <p className="text-sm font-semibold">{el.id}</p>
            <h1 className="text-lg font-bold">{el.title}</h1>
            <img src={el.thumbnailUrl} alt={el.title} className="w-full h-auto object-cover mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

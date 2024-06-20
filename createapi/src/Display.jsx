import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { AiTwotoneDelete } from "react-icons/ai";


function Display() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/data');
        setData(response.data);
        setLoad(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoad(false);
      }
    };

    fetchData();
  }, []);



    const deletepost = async(id)=>{
        try{

            await axios.delete(`http://localhost:8000/data/${id}`)

            setData(data.filter(item => item.id !== id));

            // alert("delete")

        }catch(err){
            // alert(err)
        }
        console.log(id)
    }

    deletepost()



  if (load) {
    return <Loader />;
  }


  if(data.length === 0){
    return <>
      <h1 className='m-4 text-2xl font-blod'>Emapty</h1>
    </>
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 relative">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.content}</p>
            <AiTwotoneDelete onClick={()=>deletepost(item.id)} className='absolute right-1 bottom-1 text-3xl text-red-500' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;

import React, { useState } from 'react';
import axios from 'axios'

const Add_post = () => {
  
  const [data,setData]=useState({
    title:'',
    content:''
  })

  const handlechange = (event)=>{

    setData({...data,[event.target.name] : event.target.value})

  }

  const handleSubmit = (e) => {
    
    e.preventDefault();


    axios.post('http://localhost:8000/data',data)
    .then((res)=>{
        console.log(res)
        setData({ title: '', content: '' });
    }).catch((err)=>{
        console.log('error',err)
    })

  };

//   console.log(data)

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            name='title'
            placeholder="Post title"
            value={data.title}
            onChange={handlechange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            name='content'
            placeholder="Post content"
            value={data.content}
            onChange={handlechange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_post;

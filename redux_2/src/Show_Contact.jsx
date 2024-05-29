import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ematy from './profile.png';
import { FaArrowLeft } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

function Show_Contact() {
  const { id } = useParams();
  const selector = useSelector(state => state.data);
  const data = selector.find(el => el.id === parseInt(id));
  const navigate = useNavigate();

  if (!data) {
    return <div>Contact not found</div>;
  }

  function handleBack() {
    navigate('/');
  }

  function handleEdit() {
    navigate(`/edit/${id}`);
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
        <button className="absolute left-2 top-2 text-gray-400" onClick={handleBack}>
          <FaArrowLeft />
        </button>
        
        <button className="absolute right-2 top-2 text-gray-400" onClick={handleEdit}>
          <GoPencil />
        </button>

        <div className="flex flex-col items-center sm:flex-row">
          <img 
            src={data.profile ? URL.createObjectURL(data.profile) : ematy} 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4" 
          />
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-900">{data.name}</h2>
            <p className="text-gray-600 mt-1">{data.number}</p>
            <p className="text-gray-600 mt-1">{data.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show_Contact;

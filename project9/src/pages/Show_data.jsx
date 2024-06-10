import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { deletedata } from '../redux/action';
import { useNavigate } from 'react-router';

function Show_data() {
  const selector = useSelector((state) => state.data);

  const dispath=useDispatch()

  const navigate=useNavigate()

  function del(id){

    dispath(deletedata(id))

  }

  function Update(id){
    navigate(`/update/${id}`)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selector.map((el) => (
          <div key={el.id} className="bg-white p-4 shadow-md rounded-lg relative">
            <h1 className="text-xl font-bold mb-2">{el.name}</h1>
            {/* <h1 className="text-xl font-bold mb-2">{el.id}</h1> */}
            <p className="text-gray-700"><strong>Mobile:</strong> {el.mobile}</p>
            <p className="text-gray-700"><strong>Email:</strong> {el.email}</p>
            <p className="text-gray-700"><strong>Course:</strong> {el.course}</p>
            <p className="text-gray-700"><strong>Fees:</strong> {el.fees}</p>
            <p className="text-gray-700"><strong>Additional Info:</strong> {el.additionalInfo}</p>
            <MdDelete className='absolute bottom-2 right-2 text-xl text-red-500' onClick={()=>del(el.id)}/>
            <FaPen className='absolute bottom-2 right-10 text-xl text-green-500' onClick={()=>Update(el.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Show_data;

import React , {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


function Doctor() {

  const [doctor,setDoctor]=useState()

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("Doctor"));
      if (data) {
        setDoctor(data);
      }
    }, []);

    function Deletedata(index){
      let newdata=doctor.filter((el,i)=> i !== index)
      localStorage.setItem("Doctor", JSON.stringify(newdata));
      setDoctor(newdata); 
    }

  return (
    <div className='flex items-center justify-center mt-5'>
      {Array.isArray(doctor) && doctor.length > 0 ? (
        <table className='border p-2'>
          <thead>
            <tr className='border p-2'>
              <th className='border border-blue-800 p-2'>ID</th>
              <th className='border border-blue-800 p-2'>Name</th>
              <th className='border border-blue-800 p-2'>Position</th>
              <th className='border border-blue-800 p-2'>Contact No.</th>
              <th className='border border-blue-800 p-2'>E-mail</th>
              <th className='border border-blue-800 p-2'>Delete</th>
              <th className='border border-blue-800 p-2'>Update</th>
            </tr>
          </thead>
          <tbody>
            {doctor.map((el, i) => (
              <tr className='border border-blue-300' key={i}>
                <td className='border border-blue-300 p-2'>{el.ID}</td>
                <td className='border border-blue-300 p-2'>{el.Name}</td>
                <td className='border border-blue-300 p-2'>{el.Position}</td>
                <td className='border border-blue-300 p-2'>{el.Contact}</td>
                <td className='border border-blue-300 p-2'>{el.Mail}</td>
                <td className='border border-blue-300 p-2' onClick={() => Deletedata(i)}>
                  <FontAwesomeIcon icon={faTrash} size="lg" className='text-red-500 ms-3' />
                </td>
                <td className='border border-blue-300 p-2'  onClick={() => Deletedata(i)}>
                    <FontAwesomeIcon className='text-blue-800 ms-3' size="lg" icon={faPenToSquare} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Doctor Empty</h1>
      )}
    </div>  
  )
}

export default Doctor
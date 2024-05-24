import React , {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


function Doctor() {

  const [doctor,setDoctor]=useState([])
  const [id, setId] = useState('');
  const [updateIndex, setUpdateIndex] = useState(null);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [contact, setContact] = useState('');
  const [mail, setMail] = useState('');
  const [show, setShow] = useState(false);

  const options = [
    'Cardiologists',
    'Endocrinologist',
    'Oncologist',
    'Neurologist',
    'Dermatologist',
    'Gastroenterologist',
    'Pediatrics',
    'Psychiatrists',
    'Gynecologist'
];

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

    function Updatedata(index) {
      setUpdateIndex(index);
      setShow(true);
      setId(doctor[index].ID);
      setName(doctor[index].Name);
      setPosition(doctor[index].Position);
      setContact(doctor[index].Contact);
      setMail(doctor[index].Mail);
    }
  
    function submit(e) {
      e.preventDefault();
      const updateddoctor = [...doctor];
      updateddoctor[updateIndex] = { ID: id, Name: name, Position: position, Contact: contact, Mail: mail };
      localStorage.setItem('Doctor', JSON.stringify(updateddoctor));
      setDoctor(updateddoctor);
      setShow(false);
    }

  return (
    <div className='w-full h-[90vh] flex items-center justify-center mt-5'>
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
                <td className='border border-blue-300 p-2' onClick={() => Updatedata(i)}>
                  <FontAwesomeIcon className='text-blue-800 ms-3' size="lg" icon={faPenToSquare} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Doctor Empty</h1>
      )}

      {/* Form */}
      {show && (
        <div className='w-[80%] h-[80vh] bg-gray-300  absolute'>
          <form onSubmit={submit} className='m-10 h-full flex flex-col items-center justify-around -mt-0'>
            <input type="text" placeholder='Enter Id' className='w-[500px] h-[35px] p-2 border ' value={id} onChange={(e)=>{setId(e.target.value)}} /> <br />
            <input type="text" placeholder='Enter Name' className='w-[500px] h-[35px] p-2 border' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />
            
            <select onChange={(e)=>setPosition(e.target.value)} className='w-[500px] h-[35px] p-2 border bg-white text-gray-400'>
                <option>Please choose one option</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
             <br />
            <input type="text" placeholder='Enter Contact' className='w-[500px] h-[35px] p-2 border ' value={contact} onChange={(e)=>{setContact(e.target.value)}}/> <br />
            <input type="mail" placeholder='Enter E-mail' className='w-[500px] h-[35px] p-2 border' value={mail} onChange={(e)=>{setMail(e.target.value)}}/> <br />
            <button type='submit' className='w-[100px]  h-[30px] text-white bg-green-800 rounded-sm'>Update</button>
          </form>
        </div>
      )}

    </div>
  )
}

export default Doctor
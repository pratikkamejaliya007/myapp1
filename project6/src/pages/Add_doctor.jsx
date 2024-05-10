import React from 'react'

import { useState,useEffect } from 'react'

function Add_doctor() {

    // const [Doctordata,setDoctordata]=useState([{
    //     ID:'',
    //     Name:'',
    //     Position:'',
    //     Contact:'',
    //     Mail:''
    // }])

    const [Doctordata, setDoctordata] = useState([]);

    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [position,setPosition]=useState('')
    const [contact,setContact]=useState('')
    const [mail,setMail]=useState('')

    useEffect(() => {
        console.log("Updated Doctor Data:", Doctordata);
    }, [Doctordata]);


    function submit(e){

        // e.preventDefault()
        e.preventDefault();

        setDoctordata([...Doctordata,{
            ID:id,
            Name:name,
            Position:position,
            Contact:contact,
            Mail:mail
        }])

        setId('');
        setName('');
        setPosition('');
        setContact('');
        setMail('');

    }

    

  return (
    <center >
        <form action="" onClick={submit} className='m-10 h-[400px] flex flex-col items-center justify-around'>

            <input type="text" placeholder='Enter Id' className='w-[500px] h-[35px] p-2 border ' value={id} onChange={(e)=>{setId(e.target.value)}} /> <br />

            
            <input type="text" placeholder='Enter Name' className='w-[500px] h-[35px] p-2 border' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />

            
            <input type="text" placeholder='Enter Position' className='w-[500px] h-[35px] p-2 border ' value={position} onChange={(e)=>{setPosition(e.target.value)}} /> <br />

            
            <input type="text" placeholder='Enter Contact' className='w-[500px] h-[35px] p-2 border ' value={contact} onChange={(e)=>{setContact(e.target.value)}}/> <br />

            
            <input type="mail" placeholder='Enter E-mail' className='w-[500px] h-[35px] p-2 border' value={mail} onChange={(e)=>{setMail(e.target.value)}}/> <br />

            <button type='submit' className='w-[100px]  h-[30px] text-white bg-green-800 rounded-sm'>Add</button>

        </form>
    </center>
  )
}

export default Add_doctor
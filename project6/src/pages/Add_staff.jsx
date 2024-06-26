import React from 'react'
import { useState,useEffect } from 'react';
import {Link , useNavigate} from 'react-router-dom'

function  Add_staff() {

    const nav=useNavigate()
    
        const [Staffdata, setStaffdata] = useState([]);
    
        const [id,setId]=useState('')
        const [name,setName]=useState('')
        const [position,setPosition]=useState('')
        const [contact,setContact]=useState('')
        const [mail,setMail]=useState('')

        const options = [
            'Social Worker',
            'Medical assistant',
            'Nurse Educator',
            'Nurses',
            'Advocate',
            'Physical therapists',
            'Specialists',
            'Attending physician',
            'Medical Technologist'
        ];
    
        useEffect(() => {
            if(Staffdata.length > 0){
                localStorage.setItem("Staffdata",JSON.stringify(Staffdata))
            }
        }, [Staffdata]);
    
    
        function submit(e){

            e.preventDefault();
    
            setStaffdata([...Staffdata,{
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

                <h3 className='mt-8 text-3xl'>Staff</h3>

            <form action="" onSubmit={submit} className='m-10 h-[400px] flex flex-col items-center justify-around -mt-0'>
    
                <input type="text" placeholder='Enter Id' className='w-[500px] h-[35px] p-2 border ' value={id} onChange={(e)=>{setId(e.target.value)}} /> <br />
    
                
                <input type="text" placeholder='Enter Name' className='w-[500px] h-[35px] p-2 border' value={name} onChange={(e)=>{setName(e.target.value)}} /> <br />

                <select onChange={(e)=>{setPosition(e.target.value)}} className='w-[500px] h-[35px] p-2 border bg-white text-gray-400'>

                    <option value="">Please choose one option</option>

                    {
                        options.map((el,i)=>{
                            return(
                                <option key={i}>
                                    {el}
                                </option>
                            )
                        })
                    }

                </select>
    
                
                <input type="text" placeholder='Enter Contact' className='w-[500px] h-[35px] p-2 border ' value={contact} onChange={(e)=>{setContact(e.target.value)}}/> <br />
    
                
                <input type="mail" placeholder='Enter E-mail' className='w-[500px] h-[35px] p-2 border' value={mail} onChange={(e)=>{setMail(e.target.value)}}/> <br />
    
                <button type='submit' className='w-[100px]  h-[30px] text-white bg-green-800 rounded-sm'>Add</button>
    
            </form>
        </center>
      )
    }

export default  Add_staff
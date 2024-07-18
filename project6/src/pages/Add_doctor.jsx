import React, { useState, useEffect } from 'react';

function Add_doctor() {
    const [Doctordata, setDoctordata] = useState([]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [contact, setContact] = useState('');
    const [mail, setMail] = useState('');

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
            setDoctordata(data);
        }
    }, []);

    useEffect(() => {
        if (Doctordata.length > 0) {
            localStorage.setItem("Doctor", JSON.stringify(Doctordata));
        }
    }, [Doctordata]);

    function submit(e) {
        e.preventDefault();

        const newdata = {
            ID: id,
            Name: name,
            Position: position,
            Contact: contact,
            Mail: mail
        };

        setDoctordata(prevDoctordata => [...prevDoctordata, newdata]);

        setId('');
        setName('');
        setPosition('');
        setContact('');
        setMail('');
    }

    return (
        <center>
            <h3 className='mt-8 text-3xl'>Doctor</h3>
            <form onSubmit={submit} className='m-10 h-[400px] flex flex-col items-center justify-around -mt-0'>
                <input
                    type="text"
                    required
                    placeholder='Enter Id'
                    className='w-[500px] h-[35px] p-2 border'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    required
                    placeholder='Enter Name'
                    className='w-[500px] h-[35px] p-2 border'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <select
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    className='w-[500px] h-[35px] p-2 border bg-white text-gray-400'
                >
                    <option>Please choose one option</option>
                    {options.map((option, index) => (
                        <option key={index}>
                            {option}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    required
                    placeholder='Enter Contact'
                    className='w-[500px] h-[35px] p-2 border'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
                <br />
                <input
                    type="email"
                    required
                    placeholder='Enter E-mail'
                    className='w-[500px] h-[35px] p-2 border'
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
                <br />
                <button type='submit' className='w-[100px] h-[30px] text-white bg-green-800 rounded-sm'>Add</button>
            </form>
        </center>
    );
}

export default Add_doctor;

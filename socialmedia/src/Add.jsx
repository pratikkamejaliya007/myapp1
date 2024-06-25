import axios from 'axios'
import React, { useState } from 'react'

function Add() {

    const [img, setImg] = useState(null)
    const [data, setData] = useState({ img: null })

    function handleSubmit(e) {
        e.preventDefault()

        const fetch = async () => {
            // const formData = new FormData();
            // formData.append('img', img);

            try {
                await axios.post('http://localhost:5555/data', data)
                console.log("Successfully uploaded")
            } catch (err) {
                console.error('Error uploading the file', err)
            }
        }

        fetch()
    }

    function handleImg(e) {
        const file = e.target.files[0];
        setImg(file);
        setData({ img: file });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="img" onChange={handleImg} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Add

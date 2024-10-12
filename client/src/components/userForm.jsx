import React, { useState } from 'react'
import './userForm.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const userForm = () => {
    const [name, setName] = useState('');
    const [handle, setHandle] = useState('');
    const [images, setImages] = useState([]);

    const navigate = useNavigate();


    const handleImageChange = (e) => {
        setImages(e.target.files);
      };
    

      const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', name);
            formData.append('handle', handle);
            Array.from(images).forEach((file) => formData.append('images', file));
        
            try{
            await axios.post('http://localhost:8000/submit', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });

            navigate('/dashboard');

        }catch(error){
            console.error("Error submitting", error)
        }
      }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <h2>Submit Your Details</h2>

        <input  className="input-field" type='text' value={name} required placeholder='name' onChange={(e) => setName(e.target.value)}/>
        <input  className="input-field" type='text' value={handle} required placeholder='Social Media Handle'  onChange={(e) => setHandle(e.target.value)}/>
        <input   className="input-file" type='file' multiple required  onChange={handleImageChange} />
        <button className="submit-button" type='sumbit'>Submit</button>
    </form>
  )
}

export default userForm
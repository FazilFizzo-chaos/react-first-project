import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = ({ user = {} }) => {
  const [name, setName] = useState('');
  const [birth_date, setBirthdate] = useState('');
   
  const navigate = useNavigate();

const createUser = async (user) => {
     user = { name: "",  birth_date:"" }
    try {
        const response = await axios.post('http://localhost:8080/jpa/users', user ,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
     const  createdUser = response.data;
        console.log(createdUser);  // Assuming you have a users state
    } catch (error) {
        console.error('Failed to create user:', error);
    }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user);
  };

  return ( 
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{'Create User'}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User Name"
          className="p-2 border mb-4"
        />
        <input
          type="date"
          value={birth_date}
          onChange={(e) => setBirthdate(e.target.value)}
          placeholder="Birth Date"
          className="p-2 border mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          {user.id ? 'Update' : 'Create'}
        </button>
        <button className='bg-purple-900 text-white px-4 py-2 rounded' onClick={() => navigate(`/`)}>Go to Todo Page</button>
      </form>
    </div>
  );
};

export default UserForm;

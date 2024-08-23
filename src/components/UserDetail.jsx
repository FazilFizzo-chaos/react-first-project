import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null || {name: "", birth_date:""} );

  useEffect(() => {
    axios.get(`http://localhost:8080/jpa/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>BirthDate:</strong> {user.birth_date}</p>
      
    </div>
  );
};

export default UserDetail;

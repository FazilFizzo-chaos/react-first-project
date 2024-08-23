import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/jpa/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/jpa/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="p-2 border-b flex justify-between items-center">
            <span>{user.name}</span>
            <span>{user.birth_date}</span>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => window.location.href = '/create-user'}
      >
        Create New User
      </button>
    </div>
  );
};

export default UserList;



import React from 'react';
import CreateUserForm from './CreateUserForm';

const UserEdit = ({ user, updateUser }) => {
  return (
    <div>
      <h2>Edit User</h2>
      <CreateUserForm initialData={user} updateUser={updateUser} />
    </div>
  );
};

export default UserEdit;
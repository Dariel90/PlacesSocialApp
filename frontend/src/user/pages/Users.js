import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Dariel Amores',
      image:
        'https://res.cloudinary.com/darcloudinary/image/upload/v1579290426/gg4l9n7ly6wsdhglvwnn.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

import React from 'react';

import UsersList from './../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: '1',
      name: 'Supak Pukdam',
      image: 'https://avatars2.githubusercontent.com/u/48548611?s=460&v=4',
      places: 3
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;

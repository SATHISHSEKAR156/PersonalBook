import React, { useState } from 'react';
import IndividualChat from './individualChat';
import UsersActiveStatus from './usersActiveStatus';

const ChatsSection = () => {

  const [selectedUser, setSelectedUser] = useState(null);

  // Updating the selected user data
  const handleIndividualChat = (userData) => {
    setSelectedUser(userData);
  };

  // Closing the individual chat
  const closeIndividualChat = () => {
    setSelectedUser(null);
  };

  return <div style={{ display: 'flex', alignItems: 'flex-end' }}>
    {selectedUser && <div style={{ backgroundColor: '#2c65c8', borderRadius: '10px 10px 0 0', margin: '0px 30px', display: 'flex', flexDirection: 'column', minWidth: '300px', maxWidth: '300px' }}>
      <IndividualChat selectedUser={selectedUser} closeIndividualChat={closeIndividualChat} />
    </div>}
    <div style={{ backgroundColor: '#2c65c8', borderRadius: '10px 10px 0 0', height: '0%', minWidth: '250px' }}>
      <UsersActiveStatus handleIndividualChat={handleIndividualChat} />
    </div>
  </div>
}

export default ChatsSection;
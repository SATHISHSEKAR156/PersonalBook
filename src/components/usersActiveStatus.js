import React, { useState } from 'react';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { Avatar, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import useAuth from '../hooks/useAuth';

const UsersActiveStatus = (props) => {
  const { data, usersList } = useAuth();

  const [showUsers, setShowUsers] = useState(false);

  // Displaying the users & their active/inactive status
  const getUsersStatus = () => {
    return usersList.map((user, ind) => {
      if (user.id === data.id) {
        return null;
      }
      return <div style={{ display: 'flex', alignItems: 'center', padding: '5px 10px', cursor: 'pointer' }} onClick={() => props.handleIndividualChat(user)}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ width: '30px', height: '30px' }} src={user.profilepicture} alt="pic" />
          <Typography sx={{ paddingLeft: '10px' }}>{user.name}</Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingLeft: '10px', flex: 1 }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: (ind % 2) === 0 ? '#38E54D' : 'rgba(34,34,34,0.2)', borderRadius: '50%' }} />
        </div>
      </div>
    })
  };

  return <>
    <div style={{ display: 'flex', color: '#ffff', padding: '10px', alignItems: 'center' }}>
      <ModeCommentOutlinedIcon />
      <Typography sx={{ paddingLeft: '10px' }}>Chats</Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
        <IconButton disableRipple sx={{ padding: '0px' }} onClick={() => setShowUsers(!showUsers)}>
          {showUsers ? <KeyboardArrowUpOutlinedIcon sx={{ color: '#ffff' }} /> : <KeyboardArrowDownOutlinedIcon sx={{ color: '#ffff' }} />}
        </IconButton>
      </div>
    </div>
    {
      showUsers && <div style={{ height: '200px', overflow: 'auto', backgroundColor: '#ffff', margin: '0px 2px', padding: '10px 0px' }}>
        {getUsersStatus()}
      </div>
    }
  </>
}

export default UsersActiveStatus;

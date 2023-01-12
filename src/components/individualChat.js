import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { DEFAULT_MESSAGES } from './constant';
import Message from './message';

const IndividualChat = (props) => {
  const { profilepicture, name } = props.selectedUser;

  const [existingMessages, setExistingMessages] = useState([...DEFAULT_MESSAGES]);
  const [newMessage, setNewMessage] = useState('');
  const [showChats, setShowChats] = useState(true);

  const bottomRef = useRef(null);

  // Updating the default chats
  useEffect(() => {
    setExistingMessages([...DEFAULT_MESSAGES]);
  }, [props.selectedUser]);

  // Moving the scroll bar to bottom for the visibility of recent message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [existingMessages]);

  // Storing the text field input
  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  // Sending the entered message 
  const addNewMessage = () => {
    if (newMessage?.trim().length) {
      setExistingMessages([...existingMessages, { message: newMessage, sent: true }]);
      setNewMessage('');
    }
  };

  // Sending the message on enter(event)
  const handleKeyDown = (event) => {
    if (!event.shiftKey && event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      addNewMessage();
    }
  };

  // Minimalizing the individual chat
  const hideIndividualChat = () => {
    setShowChats(!showChats);
  };

  // Displaying the chats
  const renderChatField = () => {
    return existingMessages.map((msg) => {
      return <Grid item xs={12}>
        <Message message={msg} />
      </Grid>
    })
  };

  return <>
    <div style={{ display: 'flex', color: '#ffff', padding: '10px', alignItems: 'center' }}>
      <Avatar src={profilepicture} alt="pic" />
      <Typography sx={{ paddingLeft: '10px' }}>{name}</Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
        <IconButton disableRipple sx={{ padding: '5px 2px' }} onClick={hideIndividualChat}>
          {showChats ? <KeyboardArrowUpOutlinedIcon sx={{ color: '#ffff' }} /> : <KeyboardArrowDownOutlinedIcon sx={{ color: '#ffff' }} />}
        </IconButton>
        <IconButton disableRipple sx={{ padding: '5px 2px' }} onClick={props.closeIndividualChat}>
          <CloseOutlinedIcon sx={{ color: '#ffff' }} />
        </IconButton>
      </div>
    </div>
    {
      showChats && <div style={{ display: 'flex', flex: 1, backgroundColor: '#ffff', margin: '0px 2px', padding: '10px', flexDirection: 'column' }}>
        <Grid id="messages-section" container sx={{ height: '200px', overflow: 'auto' }}>
          {renderChatField()}
          <div ref={bottomRef} />
        </Grid>
        <Grid item sx={{ marginTop: '10px' }}>
          <TextField
            fullWidth
            value={newMessage}
            onChange={handleNewMessage}
            onKeyDown={handleKeyDown}
            InputProps={{
              endAdornment: <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                <IconButton disableRipple={true} size="small" onClick={addNewMessage}>
                  <SendOutlinedIcon sx={{ color: '#2c65c8' }} />
                </IconButton>
              </InputAdornment>
            }} />
        </Grid>
      </div>
    }
  </>
}

export default IndividualChat;
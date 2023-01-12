import { Grid, Typography } from '@mui/material';
import React from 'react';

const Message = (props) => {
  const { message } = props;

  return <>
    {
      message.sent ? <Grid sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 0px' }}>
        <div style={{ backgroundColor: '#f1f1f1', padding: '5px 10px', marginRight: '5px' }}>
          <Typography>{message.message}</Typography>
        </div>
      </Grid> : <Grid sx={{ display: 'flex', justifyContent: 'flex-Start', padding: '10px 0px' }}>
        <div style={{ backgroundColor: '#f1f1f1', padding: '5px 10px' }}>
          <Typography>{message.message}</Typography>
        </div>
      </Grid>
    }
  </>
}

export default Message;
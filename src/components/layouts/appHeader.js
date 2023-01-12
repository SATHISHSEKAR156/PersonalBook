import { Divider, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Profile from '../profile';
import { URL_LABELS } from './layout-constants';

const AppHeader = () => {
  const location = useLocation();

  return <div>
    <div style={{ display: 'flex', padding: '10px', alignItems: 'center' }}>
      <Typography sx={{ fontWeight: '600', color: '#655b5b', fontSize: '1.3em' }}>{URL_LABELS[location?.pathname] || location.pathname}</Typography>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
        <Profile />
      </div>
    </div>
    <Divider />
  </div>
}

export default AppHeader;
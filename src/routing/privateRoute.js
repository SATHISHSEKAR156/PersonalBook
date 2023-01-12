import React, { useEffect, useRef } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import AppSidebar from '../components/layouts/appSidebar';
import AppHeader from '../components/layouts/appHeader';
import "../styles/layouts.css";
import ChatsSection from '../components/chatSection';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute(props) {
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const { data } = useAuth();

  // Checking the logged in status
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!data && !userData) {
      navigate('/login')
    }
  });

  return <Box sx={{ position: 'relative' }}>
    {
      data ? <>
        <Grid sx={{ height: '100vh', padding: '4%' }} container>
          <Grid sx={{ height: '100%' }} className="sidebar-container" item >
            <AppSidebar />
          </Grid>
          <Grid sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }} className="mainlayout-container" item>
            <Grid sx={{ flex: '0 !important' }} ref={headerRef} item xs={12}>
              <AppHeader />
            </Grid>
            <Grid sx={{ display: 'flex', flex: 1, overflow: 'auto' }} item xs={12}>
              {props.children}
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ position: 'absolute', bottom: 0, right: '5%' }} item>
          <ChatsSection />
        </Grid>
      </> : <div className="loader-container">
        <CircularProgress />
      </div>
    }
  </Box>
}
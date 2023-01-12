import { Avatar, Button, Divider, Menu, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/profile.css';

const Profile = () => {
    const { data, usersList, setUserData, setUsersList } = useAuth();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const openProfile = Boolean(anchorEl);

    // For showing the user profile modal box
    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget)
    };

    // Closing the modal box
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Clearing the local storage & navigating the user to login page
    const handleSignOut = () => {
        navigate('/login');
        localStorage.clear();
        setUserData({});
        setUsersList([]);
    };

    // Switching the active user
    const handleUser = (user) => {
        localStorage.setItem('userData', JSON.stringify(user));
        setUserData(user);
        setAnchorEl(null);
    };

    // Displaying all other users account
    const getOtherUsers = () => {
        return usersList.map((user) => {
            if (user.id === data.id) {
                return null;
            }
            return <>
                <Divider />
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 10px 20px', cursor: 'pointer' }} onClick={() => handleUser(user)}>
                    <Avatar src={user?.profilepicture} alt="pic" />
                    <Typography sx={{ marginLeft: '10px', fontWeight: 400 }}>{user?.name}</Typography>
                </div>
            </>
        })
    };

    return <div>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleProfileClick}>
            <Avatar src={data?.profilepicture} alt="pic" />
            <Typography sx={{ marginLeft: '10px', color: '#767676', fontWeight: 600 }}>{data?.name}</Typography>
        </div>
        <Menu
            anchorEl={anchorEl}
            open={openProfile}
            onClose={handleClose}
            className="profile-menu"
            sx={{ marginTop: '5px' }}
        >
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                    <Avatar src={data.profilepicture} alt="pic" />
                    <Typography sx={{ color: '#767676', fontWeight: '600' }}>{data.name}</Typography>
                    <Typography sx={{ opacity: 0.7 }}>{data.email}</Typography>
                </div>
                <div style={{ height: '200px', overflow: 'auto' }}>
                    {getOtherUsers()}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button className="sign-out-btn" variant="contained" onClick={handleSignOut}>Sign out</Button>
                </div>
            </div>
        </Menu>
    </div>
};

export default Profile;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, CircularProgress, Divider, Grid, Typography } from '@mui/material';
import '../styles/login.css';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Background from '../images/svg.png';

const Login = () => {
    const { setUserData, setUsersList, usersList } = useAuth();
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsersList();
    });

    //for fetching accounts
    const fetchUsersList = async () => {
        try {
            const url = 'https://panorbit.in/api/users.json';
            const response = await axios.get(url);
            if (response.status === 200 && response?.data?.users) {
                setUsersList([...response.data.users])
                localStorage.setItem('usersList', JSON.stringify(response.data.users));
            } else {
                setUsersList([])
                localStorage.setItem('usersList', JSON.stringify([]));
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    //updating the selected user data in local storage & auth-context
    const handleLogin = (userData) => {
        setUserData(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/profile');
    };

    //For displaying accounts
    const displayUsers = () => {
        return usersList.map((user, ind) => {
            const { name, profilepicture } = user;
            return <>
                <div key={ind} className="user-row" onClick={() => handleLogin(user)}>
                    <Avatar src={profilepicture} alt="pic" sx={{ marginRight: '10px' }} />
                    <Typography>{name}</Typography>
                </div>
                <Divider />
            </>
        })
    };

    return <Box sx={{ backgroundImage: `url(${Background})` }}>
        {
            isLoading ? <div className="loader-container"><CircularProgress /></div> : <div className="login-container">
                <Box className="account-box">
                    <div>
                        <Grid sx={{ marginTop: '10px', height: '50px' }} className="center">
                            <Typography sx={{ fontSize: '1.2em', color: '#727272', fontWeight: 700 }}>Select an account</Typography>
                        </Grid>
                        <Grid sx={{ padding: '10px 0px', backgroundColor: '#ffff', margin: '10px 0px' }}>
                            <div className='users-list'>
                                {displayUsers()}
                            </div>
                        </Grid>
                    </div>
                </Box>
            </div>
        }
    </Box>
}

export default Login;
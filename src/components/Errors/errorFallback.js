import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import "../../styles/errorWrapper.css";
import ErrorImg from '../../images/opps.svg';

const ErrorFallback = ({ error }) => {

    return <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} className="error-container">
            <img src={ErrorImg} className="image" alt="Something Went Wrong" />
            <Grid item>
                <Typography variant="h5" className="primary">Something Went Wrong</Typography>
                <Typography component="div" className="secondary">
                    <div><pre className="preText">{error.message}</pre></div>
                    Sorry about this...
                </Typography>
                <Grid sx={{ display: 'flex' }}>
                    <Button onClick={() => window.location.reload()} className="button">Reload</Button>
                    <Button sx={{ marginLeft: '1em' }} href="/login" onClick={() => localStorage.clear()} className="button">Logout</Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default ErrorFallback;
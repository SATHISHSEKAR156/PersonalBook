import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import "../../styles/errorWrapper.css";
import ErrorImg from '../../images/opps.svg';

const PageNotFound = () => {
   return <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={12} className="error-container">
         <img className="image" src={ErrorImg} alt="Link not found" />
         <Grid item>
            <Typography variant="h5" className="primary">Page Not Found</Typography>
            <Typography className="secondary">The link you clicked may be romoved or broken</Typography>
            <Button href="/profile" className="button">Go Home</Button>
         </Grid>
      </Grid>
   </Grid>
}

export default PageNotFound;
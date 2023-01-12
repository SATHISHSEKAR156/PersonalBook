import { Grid, Typography } from '@mui/material';
import React from 'react';

const ComingSoon = () => {
    return <Grid container>
        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{ opacity: 0.1, fontWeight: 900, fontSize: '4em' }}>Coming Soon</Typography>
        </Grid>
    </Grid>
}

export default ComingSoon;
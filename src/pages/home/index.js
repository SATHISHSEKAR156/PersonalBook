import { Avatar, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { ADDRESS_DATA, COMPANY_DATA, PERSONAL_DATA } from './constant';
import "../../styles/layouts.css";
import "../../styles/profile.css";
import Map from '../../images/map.png';

const HomePage = () => {

    const { data } = useAuth();

    // Displaying the provided data in key-value format
    const renderData = (schema, userData, forAddress = false) => {
        return Object.entries(schema).map((pair) => {
            const [key, label] = pair;
            return <Grid container>
                <Grid sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '14px', paddingBottom: '0.5em' }} item xs={forAddress ? 2 : 4}>
                    <Typography sx={{ fontWeight: '600', color: '#36333354' }}>{label}</Typography>
                </Grid>
                <Grid item xs={forAddress ? 10 : 8} sx={{ display: 'flex' }}>
                    <Typography sx={{ color: '#36333354', fontWeight: '600' }}>:</Typography>
                    <Typography sx={{ paddingLeft: '10px', fontWeight: '600', color: '#655b5b' }}>{userData[key]}</Typography>
                </Grid>
            </Grid>
        })
    };

    // Displaying the personal & company details
    const getPrimaryData = () => {
        return <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Avatar sx={{ width: '150px', height: '150px' }} src={data.profilepicture} alt="pic" />
                    <Typography sx={{ fontWeight: '600', color: '#655b5b', paddingTop: '10px' }}>{data.name}</Typography>
                </div>
            </div>
            <div style={{ padding: '10px 0px' }}>
                {renderData(PERSONAL_DATA, data)}
            </div>
            <Divider sx={{ margin: '0 3em 0 3em' }} />
            <div style={{ padding: '10px 0px' }}>
                <div style={{ paddingBottom: '5px' }} className="center">
                    <Typography sx={{ fontWeight: '700', color: '#36333354' }}>Company</Typography>
                </div>
                {renderData(COMPANY_DATA, data.company)}
            </div>
        </div>
    };

    // Displaying the address
    const getSecondaryData = () => {
        return <Grid container>
            <Grid item xs={12}>
                <Typography sx={{ fontWeight: '700', color: '#36333354', paddingBottom: '12px' }}>Address</Typography>
            </Grid>
            {renderData(ADDRESS_DATA, data.address, true)}
            <Grid sx={{ padding: '10px 0px' }} item xs={12}>
                <img src={Map} alt="map" className="map" />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', padding: '10px 0px' }}>
                    <Typography style={{ padding: '0px 10px' }}><span style={{ fontWeight: '600', color: '#36333354' }}>Lat : </span><span style={{ fontWeight: '600', color: '#655b5b' }}>{data.address?.geo?.lat}</span></Typography>
                    <Typography><span style={{ fontWeight: '600', color: '#36333354' }}>Long : </span><span style={{ fontWeight: '600', color: '#655b5b' }}>{data.address?.geo?.lng}</span></Typography>
                </div>
            </Grid>
        </Grid>
    };

    return <Grid container sx={{ padding: '20px 0px' }}>
        <Grid item sx={{ flex: '1 1 40%' }}>
            {getPrimaryData()}
        </Grid>
        <Grid item sx={{ flex: '0 1 1%' }}>
            <Divider style={{ borderRightWidth: 'initial', marginTop: '1em' }} orientation="vertical" />
        </Grid>
        <Grid item sx={{ flex: '1 1 59%', paddingLeft: '30px' }}>
            {getSecondaryData()}
        </Grid>
    </Grid>
}

export default HomePage;
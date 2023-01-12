import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SIDE_MENUS } from './layout-constants';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "../../styles/layouts.css";

const AppSidebar = () => {

    // for displaying individual menu
    const getListItem = (menu, activeStatus) => {
        return <div style={{ position: 'relative', padding: '10%' }}>
            <div style={{ padding: '10px 0' }}>
                <Typography sx={{ color: activeStatus ? 'white' : '#9493de', paddingBottom: '10px' }}>{menu.label}</Typography>
                <Divider sx={{ backgroundColor: '#9493de' }} />
            </div>
            {activeStatus && <div className="notch">
                <KeyboardArrowUpIcon sx={{ color: '#bfc7d5' }} />
            </div>}
        </div>
    };

    // for displaying the navigation menus
    const getMenuItems = () => {
        return SIDE_MENUS.map((menu, ind) => {
            return <NavLink to={menu.path} style={{ textDecoration: 'none' }}>
                {({ isActive }) => getListItem(menu, isActive)}
            </NavLink>
        })
    };

    return <Grid sx={{ display: 'flex', flexDirection: 'column' }} container>
        {getMenuItems()}
    </Grid>
}

export default AppSidebar;
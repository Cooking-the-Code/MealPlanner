import React from 'react';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import logo from '../assets/greenMealPlanIcon.svg';
import SRButton from '../components/SignInButton';

export default function Navbar() {

    return (
        <div className='navbar'>
            <AppBar position='static' style={{backgroundColor: '#127681' }}>
                <Toolbar >
                    <Grid container justify='space-between' alignItems='center'>
                        <img src={logo} className='App-logo' alt='awesome-cool-logo' />
                        <SRButton /> 
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
};
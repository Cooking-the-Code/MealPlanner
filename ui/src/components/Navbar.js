import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import logo from '../assets/greenMealPlanIcon.svg';
import SRButton from '../components/SignInButton';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    typography: {
        fontFamily: [
            'Dancing Script'
        ],
        fontWeight: '400',
        fontSize: '3rem'
    },
  }));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className='navbar'>
            <AppBar position='static' style={{backgroundColor: '#21174a' }}>
                <Toolbar >
                    <Grid container justify='space-between' alignItems='center'>
                        <Typography
                            varriant="h3"
                            component="h1"
                            className={classes.typography} 
                            
                        >
                            Come to the Table
                        </Typography>
                        
            
                        {/* <img src={logo} className='App-logo' alt='awesome-cool-logo' /> */}
                        <SRButton /> 
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
};
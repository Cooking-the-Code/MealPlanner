import React, { Component } from 'react';
import { AppBar, Button, Container, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/greenMealPlanIcon.svg';
import familyTable from '../assets/familyTable.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
      alignItems: 'center',
      justifyContent: 'space-evenly',
      zIndex: 1,
    },
    typography: {
        textAlign: 'center',
        padding: '6rem',
        fontSize: '2.5rem'
    },
  }));

  const styles = {
    paperContainer: {
        backgroundImage: `url(${familyTable})`,
        opacity: 0.5,
        
    }
  };

export default function Hero() {
    const classes = useStyles();
    

        return (
            <Container maxWidth='false' style={{height: '100vh', margin:'0', padding: '0'}}>
                    <AppBar position='static' style={{backgroundColor: '#df0e62' }}>
                        <Toolbar >
                            <Grid container justify='space-between' alignItems='center'>
                                <img src={logo} className='App-logo' alt='awesome-cool-logo' />
                                <Button variant='contained' style={{backgroundColor: '#fac70b', color: '#21174a', fontSize: '1.2rem'}} >
                                    Register / Login
                                </Button>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Paper style={styles.paperContainer}>
                        <Grid container direction='column' spacing={0} alignItems='center' justify='space-evenly'>
                            <Grid item xs={12}>
                                <Typography  
                                    className={classes.typography} >
                                    <h1 style={{color: '#127681'}}>Power statement</h1>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.typography} >
                                    <h2 className='powerText' style={{color: '#df0e62'}}>Power statement</h2>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.typography} >
                                    <h2 className='powerText' style={{color: '#21174a'}}>Power statement</h2>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} justify='center' alignItems='center' >
                                <Button color='primary' variant='contained' style={{background: '#fac70b', color: '#21174a', fontSize: '1.6rem'}}>Join Now</Button>
                            </Grid>
                        </Grid>  
                    </Paper>
                    
            </Container> 
        );
    }
    
    
    
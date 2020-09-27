import React from 'react';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/greenMealPlanIcon.svg';
import CTAButton from '../components/CTAButton';
// TODO! Do we need?      import familyTable from '../assets/familyTable.jpg';

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
        zIndex: 1,
    },
  }));

  /*  TODO! Saving for later?
  const styles = {
      //starting styling to add an image behind the Power Statements & CTA on the landing page
    paperContainer: {
        image: {
            // backgroundImage: `url(${familyTable})`,
            // opacity: 0.5,
        }
    }
  };
  */

export default function Hero() {
    const classes = useStyles();
    
        return (
            // Container for Landing Section
            <Container 
                maxWidth={false} style={{height: '100vh', margin:'0', padding: '0'}}>
                {/* Navbar */}
                    <AppBar position='static' style={{backgroundColor: '#df0e62' }}>
                        <Toolbar >
                            <Grid container justify='space-between' alignItems='center'>
                                <img src={logo} className='App-logo' alt='awesome-cool-logo' />
                                <Button 
                                    variant='contained' 
                                    style={{backgroundColor: '#fac70b', color: '#21174a', fontSize: '1.2rem'}} >
                                    Register / Login
                                </Button>
                            </Grid>
                        </Toolbar>
                    </AppBar>

                {/* starting styling to add an image behind the Power Statements & CTA on the landing page  */}
                    {/* <Paper style={styles.paperContainer.image}> */}

                    {/* Grid Container for Power Statements & CTA Button */}
                        <Grid 
                            container direction='column' 
                            spacing={0} 
                            alignItems='center' 
                            justify='space-evenly'>
                            <Grid item xs={12}>
                                <Typography  
                                    variant="h1" 
                                    component="h2"
                                    className={classes.typography} 
                                    style={{color: '#127681'}} >
                                    Power statement
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography 
                                    variant="h1" 
                                    component="h2"
                                    className={classes.typography} 
                                    style={{color: '#df0e62'}}  >
                                    Power statement
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography 
                                    variant="h1" 
                                    component="h2"
                                    className={classes.typography} 
                                    style={{color: '#21174a'}} >
                                    Power statement
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <CTAButton />
                            </Grid>
                        </Grid>  
                    {/* </Paper> */}    
            </Container> 
        );
    }
    
    
    
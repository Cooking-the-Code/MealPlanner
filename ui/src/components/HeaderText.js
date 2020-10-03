import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
      alignItems: 'center',
      justifyContent: 'space-evenly',
      zIndex: 1,
      position: 'absolute',
    },
    typography: {
        textAlign: 'center',
        padding: '2rem',
        zIndex: 1,
        fontFamily: [
            'Dancing Script',
            'Open Sans'
        ],
        fontWeight: '600'
    },
  }));

function H1Text() {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
        <Typography 
            variant="h2" 
            component="h2"
            className={classes.typography} 
            style={{color: '#21174a', fontFamily: 'Open Sans', paddingTop: '10rem'}}  >
            Bringing your Love of Cooking &
        </Typography>
    </Grid> 
    )
}

function H2Text() {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
        <Typography 
            variant="h1" 
            component="h2"
            className={classes.typography} 
            style={{color: '#21174a', fontSize: '12rem'}}  >
            Come to the Table
        </Typography>
    </Grid> 
    )
}

function H3Text() {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
        <Typography 
            variant="h2" 
            component="h2"
            className={classes.typography} 
            style={{color: '#21174a', fontFamily: 'Open Sans'}}  >
            Meal Planning together
        </Typography>
    </Grid> 
    )
}



export { H1Text, H2Text, H3Text };


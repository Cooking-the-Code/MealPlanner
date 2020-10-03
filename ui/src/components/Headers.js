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
        // padding: '6rem',
        zIndex: 1,
        fontFamily: [
            'Dancing Script'
        ],
        fontWeight: '400',
        color: '#21174a',
        padding: '10vh',
        fontSize: '5rem'
    },
  }));

function H4Text() {
    const classes = useStyles();

    return (
        // <Grid item xs={12} style={{padding: '0'}}>
            <Typography 
                variant='h3' 
                component='h3'
                className={classes.typography} 
            >
                How It Works!
            </Typography>
        // </Grid> 
    )
}

function H5Text() {
    const classes = useStyles();

    return (
        // <Grid item xs={12} style={{padding: '0'}}>
            <Typography 
                variant='h3' 
                component='h3'
                className={classes.typography} 
            >
                What people are saying...
            </Typography>
        // </Grid> 
    )
}

export { H4Text, H5Text }
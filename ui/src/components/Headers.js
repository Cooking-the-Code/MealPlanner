import React from 'react';

import { Typography } from '@material-ui/core';
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
    <Typography 
      variant='h3' 
      component='h3'
      className={classes.typography}>
      How It Works!
    </Typography>
  )
}

function H5Text() {
  const classes = useStyles();

  return (
    <Typography 
      variant='h3' 
      component='h3'
      className={classes.typography}>
      What people are saying...
    </Typography>
  )
}

function H6Text() {
  const classes = useStyles();

  return (
    <Typography 
      variant='h4' 
      component='h5'
      className={classes.typography} style={{color:'#f9a828', fontSize: '3.3rem', padding: '2rem'}}>
      How can we help?
    </Typography>
  )
}

export { H4Text, H5Text, H6Text }
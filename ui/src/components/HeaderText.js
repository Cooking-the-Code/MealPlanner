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
    },
    typography: {
        textAlign: 'center',
        padding: '6rem',
        zIndex: 1,
    },
  }));

export default function H1Text() {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
        <Typography 
            variant="h1" 
            component="h2"
            className={classes.typography} 
            style={{color: '#df0e62'}}  >
            Power statement
        </Typography>
    </Grid> 
    )
}

{/* <Grid item xs={12}>
                                <Typography  
                                    variant="h1" 
                                    component="h2"
                                    className={classes.typography} 
                                    style={{color: '#127681'}} >
                                    Power statement
                                </Typography>
                            </Grid>  */}

                            // <Grid item xs={12}>
                            //     <Typography 
                            //         variant="h1" 
                            //         component="h2"
                            //         className={classes.typography} 
                            //         style={{color: '#21174a'}} >
                            //         Power statement
                            //     </Typography>
                            // </Grid>
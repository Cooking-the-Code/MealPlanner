import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CardImage = () => {
    return(
        <Grid 
            item xs={12} sm={6}
            style={{
                color: '#df0e62', 
                // border:'5px solid yellow', 
                // width: '30vw',
                height: '40vw'}}>
            <div className='howImg'/> 
        </Grid>
    )
}
const CardText = (props) => {
  const text = props.text;

  return (
    <Grid item xs={12} sm={6} style={{ color: '#21174a', 
        // border:'5px solid red',
        // width: '30vw',
        // height: '30vw'
      }}>
      <Grid container style={{ height: '30vw', 
          // border:'5px solid yellow' 
        }}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center">
        <Grid item>
          <Typography 
            variant="h3"  
            style={{
              textAlign: 'center', margin: 'auto', fontFamily: 'Open Sans',
              marginLeft: '5vh', marginRight: '5vh',  // marginTop: '25vh', 
            }}>              
            {text}  
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
/*     container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        zIndex: 1,
        position: 'absolute',
    }, */
  typography: {
    textAlign: 'center',
    zIndex: 1,
    fontFamily: [
        'Dancing Script',
        'Open Sans'
    ],
    fontWeight: '200'
  },
}));

export default function HowCard(props) {
    const side = props.side;
    const text = props.text;
    // const classes = useStyles();

    if(side === 'left'){
      return (
        <Grid 
          item xs={12} 
          style={{border:'5px dotted black',
            margin: '2vh' }}>
          <Grid 
            style={{border:'5px solid black'}}
            container direction='row' 
            spacing={2}>
            <CardImage />
            <CardText text={text}/>
          </Grid>                
        </Grid>
      )
    } else if(side === 'right'){
      return (
        <Grid 
          item xs={12} 
          style={{border:'5px dotted blue',
            margin: '2vh' }}>
          <Grid 
            style={{border:'5px solid blue'}}
            container direction='row-reverse' 
            spacing={2}>
            <CardImage />
            <CardText text={text}/>
          </Grid>
        </Grid>
      )
    }
}
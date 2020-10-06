import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CardImage = () => {
    return(
        <Grid 
            item xs={12} sm={6}
            style={{
                color: '#df0e62', 
                height: '40vw'}}>
            <div className='howImg'/> 
        </Grid>
    )
}
const CardText = (props) => {
  const text = props.text;

  return (
    <Grid item xs={12} sm={6} style={{ color: '#21174a'}}>
      <Grid container style={{ height: '30vw' }}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center">
        <Grid item>
          <Typography 
            variant="h3"  
            style={{
              textAlign: 'center', margin: 'auto', fontFamily: 'Open Sans',
              marginLeft: '5vh', marginRight: '5vh', 
            }}>              
            {text}  
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
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

    if(side === 'left'){
      return (
        <Grid 
          item xs={12} 
          style={{ margin: '2vh' }}>
          <Grid 
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
          style={{ margin: '2vh' }}>
          <Grid 
            container direction='row-reverse' 
            spacing={2}>
            <CardImage />
            <CardText text={text}/>
          </Grid>
        </Grid>
      )
    }
}
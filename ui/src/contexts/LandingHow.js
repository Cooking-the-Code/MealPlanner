import React from 'react';
import { Container, Grid } from '@material-ui/core';
import HowCard from '../components/HowCard';
import { H4Text }from '../components/Headers';

export default function How() {
  return (
      <div>
        <Container maxWidth={false} style={{margin:'0', padding: '0'}}>
        <H4Text/>
          <Grid container direction='row' spacing={2} style={{
            padding: '10vh',
          // border:'5px solid black'
          }}>
            
            <HowCard side={'left'}/>
            <HowCard side={'right'}/>
            <HowCard side={'left'}/>
          </Grid>
        </Container> 
      </div>    
      );
  }       
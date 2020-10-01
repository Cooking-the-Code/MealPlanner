import React from 'react';
import { Container, Grid } from '@material-ui/core';
import HowCard from '../components/HowCard';

export default function How() {
  return (
      <div>
        <Container maxWidth={false} style={{margin:"0", padding: "0", border:'5px solid yellow'}}>
          <Grid container direction='column' spacing={2} style={{backgroundColor: '#df0e62', height: '70vh'}}>
            <HowCard />
            <HowCard />
            <HowCard />
          </Grid>
        </Container> 
      </div>    
      );
  }       
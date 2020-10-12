import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { H5Text } from '../components/Headers';

export default function Testimonial() {
  // const { red, blue, green } = require('@material-ui/core/colors');
  
  return (
    <div style={{ position: 'relative', width: '100%'}}>
      <Container maxWidth={false} style={{margin:'0', padding: '0', border:'5px solid yellowgreen'}}>
        <Typography component='div' style={{height: '75vh', border: '5px dotted blue'}}>
          <H5Text />
          
        </Typography>
      </Container> 
    </div>
      
  );
}

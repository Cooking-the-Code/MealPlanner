import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { H5Text } from '../components/Headers';

// TODO! Do we need?      import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

export default function Testimonial() {
  return (
    <div>
      <Container maxWidth={false} style={{margin:"0", padding: "0", border:'5px solid yellowgreen'}}>
      <Typography component="div" style={{height: '75vh'}}>
      <H5Text/>
        {/* <AutoRotatingCarousel></AutoRotatingCarousel> */}
      </Typography>
      </Container> 
    </div>
  );
}
    
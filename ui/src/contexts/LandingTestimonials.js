import React from 'react';
import { Container, Typography } from '@material-ui/core';
// TODO! Do we need?      import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

export default function Testimonial() {
  return (
    <div>
      <Container maxWidth='false' style={{margin:"0", padding: "0", border:'5px solid yellowgreen'}}>
      <Typography component="div" style={{backgroundColor: '#21174a', height: '35vh'}}>
        {/* <AutoRotatingCarousel></AutoRotatingCarousel> */}
      </Typography>
      </Container> 
    </div>
  );
}
    
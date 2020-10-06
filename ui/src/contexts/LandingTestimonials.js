import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { H5Text } from '../components/Headers';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

export default function Testimonial() {
  // const { red, blue, green } = require('@material-ui/core/colors');

  return (
    <div style={{ position: 'relative', width: '100%'}}>
      <Container maxWidth={false} style={{margin:"0", padding: "0", border:'5px solid yellowgreen'}}>
        <Typography component="div" style={{height: '75vh'}}>
          <H5Text/>
          <AutoRotatingCarousel style={{ border: '5px solid purple' }}>
            <Slide
              media={<img src='../assets/coupleCooking.jpg'/>}
              title='User Review of Come to the Table App'
              subtitle='User Name'
            />
          </AutoRotatingCarousel>
        </Typography>
      </Container> 
    </div>
  );
}
    
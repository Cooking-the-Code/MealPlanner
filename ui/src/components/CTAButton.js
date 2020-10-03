import React from 'react';
import { Button } from '@material-ui/core';


export default function CTAButton() {

    return (
        <Button 
            color='primary' 
            variant='contained' 
            style={{background: '#fac70b', color: '#21174a', fontSize: '1.6rem', fontFamily: 'Open Sans'}}>
            Join Now
        </Button>
    )
}
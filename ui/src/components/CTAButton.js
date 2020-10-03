import React from 'react';
import { Button } from '@material-ui/core';


export default function CTAButton() {

    return (
        <Button 
            color='primary' 
            variant='contained' 
            style={{background: '#f9a828', color: '#09012a', fontSize: '1.6rem', fontFamily: 'Open Sans', fontWeight: '500'}}>
            Join Now
        </Button>
    )
}
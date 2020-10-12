import React from 'react';
import { Button } from '@material-ui/core';


export default function SRButton() {

    return (
        <Button 
            variant='contained' 
            style={{backgroundColor: '#f9a828', color: '#09012a',  fontSize: '1.2rem', fontFamily: 'Open Sans'}} >
            Register / Login
        </Button>
    )      
}



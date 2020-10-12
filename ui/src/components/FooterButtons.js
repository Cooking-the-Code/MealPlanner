import React from 'react';
import { Button } from '@material-ui/core';


function FAQButton() {

    return (
        <Button 
            color='primary' 
            variant='contained' 
            style={{background: '#f9a828', color: '#09012a', fontSize: '1.6rem', fontFamily: 'Open Sans', fontWeight: '500', margin: '1rem 5rem' }}>
            FAQ's
        </Button>
    )
}

function ContactButton() {

    return (
        <Button 
            color='primary' 
            variant='contained' 
            style={{background: '#f9a828', color: '#09012a', fontSize: '1.6rem', fontFamily: 'Open Sans', fontWeight: '500', margin: '1rem 5rem' }}>
            Contact Us
        </Button>
    )
}

function Account1Button() {

    return (
        <Button 
            color='primary' 
            variant='contained' 
            style={{background: '#f9a828', color: '#09012a', fontSize: '1rem', fontFamily: 'Open Sans', fontWeight: '400' }}>
            Privacy Notice
        </Button>
    )
}

function Account2Button() {

    return (
        <Button 
            color='primary' 
            variant='contained' 
            style={{background: '#f9a828', color: '#09012a', fontSize: '1rem', fontFamily: 'Open Sans', fontWeight: '400'}}>
            Cooking the Code {`\u00A9`+new Date().getFullYear()}
        </Button>
    )
}



export { FAQButton, ContactButton, Account1Button, Account2Button }
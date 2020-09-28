import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import CTAButton from '../components/CTAButton';

export default function CTA() {
    // path for sign up page
    // const signUpPath = '/landing';

    // I would love to reduce the padding on the top and bottom of these elements but margin-left is not recognized. 
    return (
        <div display="flex">
            <Container maxWidth={false} style={{margin:"0", padding: "0"}}>
                <Typography 
                    component="div" 
                    style={{backgroundColor: '#127681', height: 'auto', margin: 'auto', border:'5px solid yellow'}}>
                    <Typography 
                        variant="h3"  
                        style={{
                            textAlign: 'center', margin: '10vh', 
                            marginLeft: '20vh', marginRight: '20vh',
                            border:'5px solid red'}}>
                        Chitty Bang Bang, Chitty Chitty Bang Bang
                        We love you and in
                        Chitty Chitty Bang Bang, Chitty Chitty Bang Bang
                        What we'll do?
                    </Typography>
                    <Typography 
                        variant="h4" 
                        align="center" 
                        style={{
                            textAlign: 'center', margin: '10vh', 
                            marginLeft: '20vh', marginRight: '20vh', 
                            border:'5px solid red'}}>
                        Click on the CTA!
                        <br />
                        <CTAButton />
                    </Typography>
                </Typography>   
            </Container>
        </div>    
        );
    }
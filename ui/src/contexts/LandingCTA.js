import React from 'react';
import { Container, Typography } from '@material-ui/core';
import CTAButton from '../components/CTAButton';

export default function CTA() {
    // I would love to reduce the padding on the top and bottom of these elements but margin-left is not recognized. 
    return (
        <div display="flex">
            <Container maxWidth={false} style={{margin:"0", padding: "0"}}>
                <Typography 
                    component="div" 
                    style={{height: 'auto', margin: 'auto'}}>
                    <Typography 
                        variant="h3"  
                        style={{
                            color: '#21174a', atextAlign: 'center', margin: '10vh', 
                            marginLeft: '20vh', marginRight: '20vh', fontFamily: 'Open Sans'}}>
                        Chitty Bang Bang, Chitty Chitty Bang Bang
                        We love you and in
                        Chitty Chitty Bang Bang, Chitty Chitty Bang Bang
                        What we'll do?
                    </Typography>
                    <Typography 
                        variant="h4" 
                        align="center" 
                        style={{
                            color: '#21174a', textAlign: 'center', margin: '10vh', 
                            marginLeft: '20vh', marginRight: '20vh'}}>
                        <CTAButton />
                    </Typography>
                </Typography>   
            </Container>
        </div>    
        );
    }
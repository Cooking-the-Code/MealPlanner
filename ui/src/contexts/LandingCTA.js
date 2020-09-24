import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography } from '@material-ui/core';

class CTA extends Component {
    render() {
        // path for sign up page
        const signUpPath = '/landing';

        return (
            <div>
                <Container>
                    <Typography component="div" style={{backgroundColor: 'Blue', height: '70vh', margin: 'auto'}}>
                        <Typography variant="h3"  style={{textAlign: 'center', margin: 'auto'}}>
                            Chitty Bang Bang, Chitty Chitty Bang Bang
                            We love you and in
                            Chitty Chitty Bang Bang, Chitty Chitty Bang Bang
                            What we'll do?
                        </Typography>
                        <Typography variant="h4" align="center">
                            Click on the CTA!
                            <Link to={signUpPath}> Sign up now! </Link>
                        </Typography>
                    </Typography>   
                </Container>
            </div>    
            );
        }
    }
    
    export default CTA;
    
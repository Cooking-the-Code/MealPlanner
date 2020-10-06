import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CTAButton from '../components/CTAButton';
import Navbar from '../components/Navbar';
import { H1Text, H2Text, H3Text } from  '../components/HeroText';

export default function Hero() {
    
        return (
            <div className="bg">
                <Container maxWidth={false} style={{margin:'0', padding: '0', height:'100vh' }}>
                    <div className='navbar'>
                        <Navbar />
                    </div>
                    <div className='text-wrapper'>
                            <Grid container direction='row' width='100vw'>
                                <Grid item xs={12}>
                                    <H1Text />
                                </Grid>              
                                <Grid item item xs={12}>
                                    <H2Text />
                                </Grid> 
                                <Grid item item xs={12}>
                                    <H3Text />
                                </Grid> 
                                <Grid item xs={12} >
                                    <CTAButton />
                                </Grid>
                            </Grid>
                        </div>
                </Container>
            </div>
        );
    }

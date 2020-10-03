import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CTAButton from '../components/CTAButton';
import Navbar from '../components/Navbar';
import { H1Text, H2Text, H3Text } from  '../components/HeaderText';
import HeroImage from '../components/HeroImage';

export default function Hero() {
    
        return (
            <div className="bg">
                <Container maxWidth={false} style={{margin:'0', padding: '0', border:'5px solid magenta', height:'100vh' }}>
                    <div className='navbar'>
                        <Navbar />
                    </div>
                </Container>
            </div>
        );
    }
    

    /*             // Container for Landing Section
            <Grid container xs={12} width='100vw' height='100vh'>
                <Container 
                    maxWidth={false} 
                    width='100vw' height='100vh' 
                    style={{margin:'0', padding: '0', border:'5px solid blue'}}
                    xs={12}
                    direction='row'
                    alignItems='center' 
                    justify='center'
                >
                    <Grid item>
                        <div className='navbar'>
                            <Navbar />
                        </div>
                    </Grid>
                    <Grid container
                        style={{border:'5px solid yellow'}}
                        spacing={0}
                        direction='column'
                        alignItems='center'
                        justify='center' 
                        width='100vw' height='100vh'>
                        <Grid item>
                        <div width='100wv' height='100vh'
                            style={{border:'5px solid red'}}>
                            <HeroImage />
                        </div>
                        </Grid>
                        <div className='text-wrapper'>
                            <Grid container direction='row' spacing={0} // style={{border:'5px solid black'}}
                                direction='column'
                                alignItems='center'
                                justify='center'
                                width='100vw'>
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
                    </Grid>
                </Container> 
            </Grid> */
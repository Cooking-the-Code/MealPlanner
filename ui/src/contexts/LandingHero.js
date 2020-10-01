import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import CTAButton from '../components/CTAButton';
import Navbar from '../components/Navbar';
import { H1Text, H2Text, H3Text } from  '../components/HeaderText';
import HeroImage from '../components/HeroImage';



export default function Hero() {
    
    
        return (
            // Container for Landing Section
            
            <Container 
                maxWidth={false} 
                style={{height: '100vh', margin:'0', padding: '0'}}
                 >
                <Navbar 
                    style={{position: 'absolute', zIndex: '1000'}}
                />
                <HeroImage >
                <Paper >
                
            {/* Grid Container for Power Statements & CTA Button */}
                    <Grid 
                        container direction='column' 
                        spacing={0} 
                        alignItems='center' 
                        justify='space-evenly'
                        style={{position: 'absolute', zIndex: '1000'}}>
                        
                        <H1Text />
                        <H2Text />
                        <H3Text />
                        
                        <Grid item xs={12} >
                            <CTAButton />
                        </Grid>
                    </Grid> 
                    </Paper>   
                    </HeroImage> 
            </Container> 
            
        );
    }
    
    
    
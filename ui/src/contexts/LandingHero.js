import React from 'react';
import { Container, Grid } from '@material-ui/core';
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
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='img-wrapper'>
                <HeroImage />
            </div>
            <div className='text-wrapper'>
            {/* Grid Container for Power Statements & CTA Button */}                        
                <H1Text />
                <H2Text />
                <H3Text />
                
                <Grid item xs={12} >
                    <CTAButton />
                </Grid>
            </div>
            </Container> 
            
        );
    }
    
    
    
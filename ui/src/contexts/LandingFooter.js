import React from 'react';
import { Grid } from '@material-ui/core';
import FooterSection2 from '../components/FooterSection2';
import FooterSection3 from '../components/FooterSection3';


export default function LandingFooter() {

    return (
            <div>
                <Grid container  direction='row' spacing={4}  style={{backgroundColor: '#09012a'}} width='100vw'>
                    <Grid item xs={12} md={4} >
                        Logo
                    </Grid>                    
                    <Grid container direction='column' justify='flex-end' item xs={12} md={4} >
                        <FooterSection2 />
                    </Grid>
                    <Grid item xs={12} md={4} >                      
                        <FooterSection3 />
                    </Grid>
                </Grid>
            </div>
    
            );
        }
    

    
import React from 'react';
import { Grid } from '@material-ui/core';
import { H6Text } from './Headers';
import { FAQButton, ContactButton } from './FooterButtons';
import { Facebook, Instagram, LinkedIn, Twitter } from './Icons'


export default function FooterSection3() {

    return (
        <Grid container direction='column' >
            <H6Text />
            <FAQButton />
            <ContactButton />
            <Grid container direction='row' style={{justifyContent: 'space-evenly', height:'10rem'}}>
                <Grid item style={{alignSelf:'center'}}>
                    <Facebook />
                </Grid>
                <Grid item style={{alignSelf:'center'}}>
                    <Instagram />
                </Grid>
                <Grid item style={{alignSelf:'center'}}>
                    <LinkedIn />
                </Grid>
                <Grid item style={{alignSelf:'center'}}>
                    <Twitter />
                </Grid>
            </Grid>
        </Grid>
    )
};
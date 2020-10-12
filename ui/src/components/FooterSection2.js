import React from 'react';
import { Grid } from '@material-ui/core';
import { Account1Button, Account2Button } from '../components/FooterButtons';


export default function FooterSection2() {

    return (
        <Grid container direction='row' justify='center' >
            <Grid container item xs={12} sm={6} order='1' justify='center'>
                <Account1Button/>
            </Grid>
            <Grid container item xs={12} sm={6} order='2' justify='center'>
                <Account2Button/>
            </Grid>
        </Grid>
    )
};
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const CardImage = () => {
    return(
        <Grid 
            item xs={6} 
            style={{
                color: '#df0e62', 
                // border:'5px solid yellow', 
                height: '40vw', 
                width: '40vw'}}>
            <div className='howImg'/> 
        </Grid>
    )
}
const CardText = () => {
    return (
        <Grid 
            item xs={6} 
            style={{
                color: '#21174a', 
                // border:'5px solid red', 
                height: '40vw', 
                width: '40vw'}}>
            <Typography 
                variant="h3"  
                style={{
                    textAlign: 'center', margin: 'auto', 
                    marginLeft: '5vh', marginRight: '5vh', marginTop: '25vh', fontFamily: 'Open Sans', }}>
                Chitty Bang Bang, Chitty Chitty Bang Bang
                We love you and in
                Chitty Chitty Bang Bang, Chitty Chitty Bang Bang
                What we'll do?
            </Typography>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
/*     container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        zIndex: 1,
        position: 'absolute',
    }, */
    typography: {
        textAlign: 'center',
        zIndex: 1,
        fontFamily: [
            'Dancing Script',
            'Open Sans'
        ],
        fontWeight: '200'
    },
}));

export default function HowCard(props) {
    const side = props.side;
    const classes = useStyles();


    if(side === 'left'){
        return (
            <Grid 
                item xs={12} 
                style={{
                    margin: '2vh', 
                    // border:'5px solid black'
                    }}>
                <Grid 
                    container direction='row' 
                    spacing={0} 
                    // style={{border:'5px solid black'}}
                    >
                    <CardImage />
                    <CardText />
                </Grid>                
            </Grid>
        )
    } else if(side === 'right'){
        return (
            <Grid 
                item xs={12} 
                style={{
                    margin: '2vh', 
                    // border:'5px solid blue'
                    }}>
                <Grid 
                    container direction='row' 
                    spacing={0} 
                    // style={{border:'5px solid black'}}
                    >
                    <CardText />
                    <CardImage />
                </Grid>
            </Grid>
        )
    }
}
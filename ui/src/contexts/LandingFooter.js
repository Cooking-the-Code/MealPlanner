import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

class LandingFooter extends Component {



    render() {
        return (
            <div>
                <Container maxWidth='false' style={{margin:"0", padding: "0", border:'5px solid white'}}>
                <Typography component="div" style={{backgroundColor: '#fac70b', height: '30vh'}}>

                </Typography>
               </Container> 
            </div>
    
            );
        }
    }
    
    export default LandingFooter;
    
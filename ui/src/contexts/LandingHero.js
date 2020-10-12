<<<<<<< HEAD
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
    
    
    
=======
import React, { Component } from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../assets/greenMealPlanIcon.svg";
import PopupModal from "../components/PopupModal";

class Hero extends Component {
  render() {
    return (
      <Container
        style={{ margin: "0", padding: "0", border: "5px solid blue" }}
      >
        <Typography component="div" style={{ height: "100vh" }}>
          <AppBar position="static" style={{ backgroundColor: "#e00543" }}>
            <Toolbar>
              <Grid container justify="space-between" alignItems="center">
                <img src={logo} className="App-logo" alt="awesome-cool-logo" />
                {/* Popup Modal for sign in and sign up */}
                <PopupModal />
              </Grid>
            </Toolbar>
          </AppBar>
          <Container>
            {/* <img src={familyTable} style={{width: '125wh', height: '90vh'}}/> */}
            <Typography
              component="div"
              style={{
                color: "#84253e",
                fontSize: "4rem",
                textAlign: "center",
                margin: "auto",
                paddingTop: 100,
              }}
            >
              Power statement
            </Typography>
            <Typography
              component="div"
              style={{
                color: "#84253e",
                fontSize: "4rem",
                textAlign: "center",
                margin: "auto",
              }}
            >
              Power statement
            </Typography>
            <Typography
              component="div"
              style={{
                color: "#84253e",
                fontSize: "4rem",
                textAlign: "center",
                margin: "auto",
                paddingBottom: 100,
              }}
            >
              Power statement
            </Typography>
          </Container>
          <Grid container justify="center" alignItems="center">
            <Button
              color="primary"
              variant="contained"
              style={{
                background: "#e00543",
                color: "#eee",
                fontSize: "1.6rem",
              }}
            >
              CTA
            </Button>
          </Grid>
        </Typography>
      </Container>
    );
  }
}

export default Hero;
>>>>>>> signin

import React from 'react';
import { Container, Grid } from '@material-ui/core';
import HowCard from '../components/HowCard';
import { H4Text }from '../components/Headers';
import coupleCooking2 from '../assets/coupleCooking2.jpg';
import planning2 from '../assets/planning2.jpg';
import flourFamily from '../assets/flourFamily.jpg';

export default function How() {
  const howText1 = "Chitty Bang Bang, Chitty Chitty Bang Bang We love you and in Chitty Chitty Bang Bang, Chitty Chitty Bang Bang What we'll do?";
  const howText2 = "Enough with the silly old school movie referances will ya?";
  const howText3 = "Very well, but the hills are alive!!   Alive with the sound of Music!";  
  
  
  return (
    <div>
      <Container maxWidth={false} style={{margin:'0', padding: '0'}}>
        <H4Text/>

        <Grid container direction='row' spacing={2} style={{padding: '10vh'}}>            
          <HowCard side={'left'} text={howText1} image={'placeHolder'}/>
          <HowCard side={'right'} text={howText2} image={'placeHolder'}/>
          <HowCard side={'left'} text={howText3} image={'placeHolder'}/>
        </Grid>
      </Container> 
    </div>    
    );
  }       
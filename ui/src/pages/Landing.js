import React, { Component } from 'react';
import CTA from '../contexts/LandingCTA';
import Hero from '../contexts/LandingHero';
import How from '../contexts/LandingHow';
import Testimonial from '../contexts/LandingTestimonials';
import LandingFooter from  '../contexts/LandingFooter';


class Landing extends Component {



    render() { 
        return (
            <div style={{border:'5px solid black'}}>
                <Hero />
                <How />
                <Testimonial />
                <CTA />
                <LandingFooter />
            </div>
        );
    }
}

export default Landing;

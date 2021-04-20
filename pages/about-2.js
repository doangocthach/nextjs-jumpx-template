import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/AboutTwo/About';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import PartnerSlider from '../components/Common/PartnerSlider';
import Footer from '../components/Layouts/Footer';

class About2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="About Style Two" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About Style Two" 
                /> 
                <About />
                <WhyChooseUs />
                <MakeYourBusiness />
                <Testimonials />
                <PartnerSlider />
                <Footer />
            </React.Fragment>
        );
    }
}

export default About2;
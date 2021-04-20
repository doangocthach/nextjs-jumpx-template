import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/AboutOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class About1 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="About Style One" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About Style One" 
                /> 
                <About />
                <MakeYourBusiness />
                <Testimonials />
                <TeamTwo />
                <div className="pb-50">
                    <Partner />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default About1;
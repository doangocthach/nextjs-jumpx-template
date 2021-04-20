import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import Features from '../components/HomeOne/Features';
import About from '../components/HomeOne/About';
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';
import Services from '../components/HomeOne/Services';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import WhatWeOffer from '../components/HomeOne/WhatWeOffer';
import Testimonials from '../components/Common/Testimonials';
import News from '../components/Common/News';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <Features />
                <About />
                <WhyChooseUs />
                <Services />
                <MakeYourBusiness />
                <WhatWeOffer />
                <Testimonials />
                <News />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
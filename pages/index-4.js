import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeFour/MainBanner';
import PartnerSliderTwo from '../components/Common/PartnerSliderTwo';
import About from '../components/HomeFour/About';
import Services from '../components/HomeFour/Services';
import WhyChooseUs from '../components/HomeFour/WhyChooseUs';
import MakeYourBusiness from '../components/HomeFour/MakeYourBusiness';
import WhatWeOffer from '../components/HomeFour/WhatWeOffer';
import Team from '../components/Common/Team';
import CaseStudies from '../components/HomeFour/CaseStudies';
import Testimonials from '../components/Common/Testimonials';
import Faq from '../components/HomeFour/Faq';
import Newsletter from '../components/Common/Newsletter';
import News from '../components/HomeFour/News';
import Footer from '../components/Layouts/Footer';
 
class Index4 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="body-bg-color">
                    <Navbar />
                    <MainBanner />
                    <PartnerSliderTwo />
                    <About />
                    <Services />
                    <WhyChooseUs />
                    <MakeYourBusiness />
                    <WhatWeOffer />
                    <CaseStudies />
                    <Team />
                    <Testimonials />
                    <Faq />
                    <Newsletter />
                    <News />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default Index4;
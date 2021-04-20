import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Services Style One" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Style One" 
                /> 
                <ServicesStyleOne />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;
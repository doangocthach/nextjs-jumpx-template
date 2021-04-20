import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleThree from '../components/Services/ServicesStyleThree';
import Footer from '../components/Layouts/Footer';

class Services3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Services Style Three" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Style Three" 
                /> 
                <ServicesStyleThree />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services3;
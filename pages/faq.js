import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import AskQuestionForm from '../components/Faq/AskQuestionForm';
import Footer from '../components/Layouts/Footer';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Frequently Asked Questions" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Frequently Asked Questions" 
                /> 
                <FaqContent />
                <AskQuestionForm />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Faq;
import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsGridCard from '../components/News/NewsGridCard';
import Footer from '../components/Layouts/Footer';

class NewsGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="News Grid" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="News Grid" 
                /> 
                <NewsGridCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default NewsGrid;
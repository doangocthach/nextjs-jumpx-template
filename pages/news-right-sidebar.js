import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsGridTwo from '../components/News/NewsGridTwo';
import Footer from '../components/Layouts/Footer';

class NewsRightSidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="News Right Sidebar" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="News Right Sidebar" 
                /> 
                <NewsGridTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default NewsRightSidebar;
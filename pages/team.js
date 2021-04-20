import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamCard from '../components/Team/TeamCard';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Team" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Team" 
                /> 
                <TeamCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Team;
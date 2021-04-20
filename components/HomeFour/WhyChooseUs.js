import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="choose-title home-four-section-title">
                                <span>Why Choose Us</span>
                                <h2>Our Platform Takes Away The Hard Process Of Creating Your Website</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>
                                            01 <i className="flaticon-technical-support"></i>
                                        </span>
                                        <h3>Safe Security</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="ml">
                                        <span>
                                            02 <i className="flaticon-shield"></i>
                                        </span>
                                        <h3>Technical Support</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span>
                                            03 <i className="flaticon-support"></i>
                                        </span>
                                        <h3>Live Support</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-img">
                                <img src="/images/choose-img.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;
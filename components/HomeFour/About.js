import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area about-area-four pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/about-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>We Complete Every Project With Extra Care As Customer Need</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                               
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Advanced caching
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Unlimited  applications
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                PHP 7 ready transfer
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                PHP ready serves
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                24/7 Free extra support
                                            </li>
                                            <li>
                                                <i className="flaticon-checked"></i>
                                                Optimized stack
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <Link href="/about-1">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
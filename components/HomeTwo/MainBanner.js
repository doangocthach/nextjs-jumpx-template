import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <section className="main-banner-area main-banner-area-two">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-text">
                                <h1>World’s Leading Machine Learning Company</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo</p>	

                                <div className="banner-btn">
                                    <Link href="/about">
                                        <a className="default-btn">
                                            Learn More
                                        </a>
                                    </Link>

                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Contact Us
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            {/* Main Image */}
                            <div className="banner-main-img banner-one-main-img">
                                <img src="/images/home-two/main-img2.png" alt="Image" />
                            </div>

                            {/* Banner Shape Images */}
                            <div className="banner-img">
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/images/home-two/shape1.png" alt="Image" />
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <div className="square-img">
                                        <img src="/images/home-two/shape2.png" alt="Image" />
                                    </div>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/images/home-two/shape3.png" alt="Image" />
                                </ReactWOW>
                                
                                <ReactWOW delay='.1s' animation='zoomIn'>
                                    <div className="circle-img">
                                        <img src="/images/home-two/shape4.png" alt="Image" />
                                    </div>
                                </ReactWOW>

                                <img src="/images/home-two/shape5.png" alt="Image" />
                                 
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/images/home-two/shape6.png" alt="Image" />
                                </ReactWOW>

                                <ReactWOW delay='.6s' animation='fadeInDown'>
                                    <img src="/images/home-two/shape7.png" alt="Image" />
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <img src="/images/home-two/shape8.png" alt="Image" />
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <img src="/images/home-two/shape9.png" alt="Image" />
                                </ReactWOW>

                                <ReactWOW delay='1s' animation='fadeInRight'>
                                    <img src="/images/home-two/shape10.png" alt="Image" />
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div> 

                {/* Shape Images */}
                <div className="over-shape">
                    <img src="/images/home-one/shape/animate1.png" alt="Image" />
                    <img src="/images/home-one/shape/animate2.png" alt="Image" />
                    <img src="/images/home-one/shape/animate3.png" alt="Image" />
                </div>
            </section>
        );
    }
}

export default MainBanner;
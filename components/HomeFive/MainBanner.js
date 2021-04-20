import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin:0,
    nav:true,
    mouseDrag: false,
    items:1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}

class MainBanner extends Component {

    state = { 
        display: false,
        panel: true
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <section className="slider-area">
                {this.state.display ? <OwlCarousel 
                    className="arduix-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="arduix-slider-item item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden one">
                                        <span>IT & AI Services</span>
                                        <h1>Secure IT Solutions For A More Secure Environment</h1>
                                        <p>If we drive down the cost of transportation in space, we can do great things.</p>
                                        
                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Our Services
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn white">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="arduix-slider-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden two">
                                        <span>IT & AI Services</span>
                                        <h1>Specialized Artificial Intelligence Startup</h1>
                                        <p>If we drive down the cost of transportation in space, we can do great things.</p>

                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Our Services
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn white">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="arduix-slider-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="arduix-slider-text overflow-hidden three">
                                        <span>IT & AI Services</span>
                                        <h1>World’s Leading Machine Learning Company</h1>
                                        <p>If we drive down the cost of transportation in space, we can do great things.</p>

                                        <div className="slider-btn">
                                            <Link href="/services">
                                                <a className="default-btn active">
                                                    Our Services
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn white">
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </section>
        );
    }
}

export default MainBanner;
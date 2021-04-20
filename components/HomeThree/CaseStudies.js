import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:false,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: true,
    slidetransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
}

class CaseStudies extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="case-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Case</span>
                        <h2>Our Recent Case Studies</h2>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                        className="case-top-wrap owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="case-wrap">
                                <div className="single-case">
                                    <img src="/images/cases/case1.png" alt="Image" />

                                    <Link href="#">
                                        <a className="link-icon">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>
                                            Cognitive Architectures
                                        </a>
                                    </Link>
                                </h3>
                            </div>

                            <div className="case-wrap">
                                <div className="single-case">
                                    <img src="/images/cases/case2.png" alt="Image" />

                                    <Link href="#">
                                        <a className="link-icon">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>
                                            Image Detection
                                        </a>
                                    </Link>
                                </h3>
                            </div>

                            <div className="case-wrap">
                                <div className="single-case">
                                    <img src="/images/cases/case3.png" alt="Image" />

                                    <Link href="#">
                                        <a className="link-icon">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>
                                            Software Liabries
                                        </a>
                                    </Link>
                                </h3>
                            </div>

                            <div className="case-wrap">
                                <div className="single-case">
                                    <img src="/images/cases/case4.png" alt="Image" />

                                    <Link href="#">
                                        <a className="link-icon">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <h3>
                                    <Link href="#">
                                        <a>
                                            Architectures Liabries
                                        </a>
                                    </Link>
                                </h3>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default CaseStudies;
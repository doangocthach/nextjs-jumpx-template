import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 0,
    center: false,
    dots: false,
    slidetransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
    }
}

class PartnerSliderTwo extends Component {

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
            <div className="brand-area ptb-100">
                <div className="container">

                {this.state.display ? <OwlCarousel 
                    className="brand-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand1.png" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand2.png" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand3.png" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand4.png" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand5.png" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand6.png" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand7.png" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand8.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default PartnerSliderTwo;
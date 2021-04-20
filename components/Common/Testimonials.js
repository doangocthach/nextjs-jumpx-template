import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
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

class Testimonials extends Component {

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
            <section className="client-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What Clients Say About Us</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <img src="/images/clients/client1.jpg" alt="Image" />
                                <h3>Alen Meair</h3>
                                <span>Developer</span>
                            </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <img src="/images/clients/client2.jpg" alt="Image" />
                                <h3>Axon Detos</h3>
                                <span>CEO</span>
                            </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <img src="/images/clients/client3.jpg" alt="Image" />
                                <h3>John Dona</h3>
                                <span>Designer</span>
                            </div>
                        </div>

                        <div className="single-client">
                            <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul>

                            <div className="client-img">
                                <img src="/images/clients/client4.jpg" alt="Image" />
                                <h3>Jon Smith</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Testimonials;
import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="newsletter-wrap">
                                <h2>Sign Up To The Free Newsletter</h2>

                                <form className="newsletter-form">
                                    <input type="email" className="form-control" placeholder="Your Email" name="email" required />
                                    <button className="default-btn" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="newsletter-img">
                                <img src="/images/newsletter-img.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="call-us">
                                <h2>Sign Up To The Free Newsletter</h2>
                                <span>+882-569-756</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="newsletter-shape">
                    <img src="/images/shape/newsletter-shape-one.png" alt="Image" />
                    <img src="/images/shape/newsletter-shape-one.png" alt="Image" />
                    <img src="/images/shape/newsletter-shape-two.png" alt="Image" />
                </div>
            </div>
        );
    }
}

export default Newsletter;
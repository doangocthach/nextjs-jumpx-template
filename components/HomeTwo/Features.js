import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
    render() {
        return (
            <div className="features-area mt-minus-70 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>Data Science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>Data Engineer</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Facing AI Challenges</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;
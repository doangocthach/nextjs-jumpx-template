import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleThree extends Component {
    render() {
        return (
            <section className="offer-area gray-bg ptb-100">
			    <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-chip"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Robotics & Drones</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Virtually Reality</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Blockchain Project</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Image Processing</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Order Management</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Machine Learning</a>
                                    </Link>
                                </h3>
                                <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                            </div>
                        </div>


                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Data Science</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-engineer"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Data Engineer</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="service-card">
                                <i className="flaticon-success"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Facing AI Challenges</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link page-links">
                                                    <i className='bx bx-chevrons-left'></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="page-item active">
                                            <Link href="#">
                                                <a className="page-link">1</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">2</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">3</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">
                                                    <i className='bx bx-chevrons-right'></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src="/images/shape/services-shape/1.png" alt="Image" />
                    <img src="/images/shape/services-shape/2.png" alt="Image" />
                    <img src="/images/shape/services-shape/3.png" alt="Image" />
                    <img src="/images/shape/services-shape/4.png" alt="Image" />
                    <img src="/images/shape/services-shape/5.png" alt="Image" />
                    <img src="/images/shape/services-shape/6.png" alt="Image" />
                </div>
            </section>
        );
    }
}

export default ServicesStyleThree;
import React, { Component } from 'react';
import Link from 'next/link';

class TeamTwo extends Component {
    render() {
        return (
            <section className="team-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Team</span>
                        <h2>Meet Our Genius Team</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos ea obcaecati et similique incidunt animi, sed, quos officiis placeat. Id ipsa molestias.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team5.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Karen Peter</h3>
                                    <span>CEO</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-pinterest-alt"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team6.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Kene Alex Piter</h3>
                                    <span>Executive</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-pinterest-alt"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team7.png" alt="Image" />

                                    <div className="team-img">
                                        <img src="/images/team/team-shape.png" alt="Image" />
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Alisa Maria</h3>
                                    <span>Developer</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-twitter"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a><i className="bx bxl-pinterest-alt"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamTwo;
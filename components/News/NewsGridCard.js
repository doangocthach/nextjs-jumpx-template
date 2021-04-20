import React, { Component } from 'react';
import Link from 'next/link';

class NewsGridCard extends Component {
    render() {
        return (
            <section className="news-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog1.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>20 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Is Machine Learning Right For You</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>
                                    
                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog2.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>21 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 3 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>The State Of Artificial Intelligence</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>
                                    
                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog3.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>22 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 4 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Our Company Machine Learning </h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog4.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>23 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>The Security Risks Of Changing Package Owners</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog5.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>24 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Tips To Protecting Your Business And Family</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog6.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>25 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Protect Your Workplace From Cyber Attacks</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog7.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>25 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Making Peace With The Feast Or Famine Of Freelancing</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog8.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>27 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>I Used The Web For A Day On A 50 MB Budget</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-news">
                                <div className="blog-img">
                                    <Link href="/news-details">
                                        <a>
                                            <img src="/images/blog/blog9.png" alt="Image" />
                                        </a>
                                    </Link>

                                    <div className="dates">
                                        <span>28 February</span>
                                    </div>
                                </div>

                                <div className="news-content-wrap">
                                    <ul>
                                        <li>
                                            <Link href="#"> 
                                                <a>
                                                    <i className="flaticon-user"></i> Admin
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-conversation"></i> 2 Comments
                                        </li>
                                    </ul>

                                    <Link href="/news-details">
                                        <a>
                                            <h3>Here Are The 5 Most Telling Signs Of Micromanagement</h3>
                                        </a>
                                    </Link>

                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                    <Link href="/news-details">
                                        <a className="read-more">
                                            Read More <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>
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
            </section>
        );
    }
}

export default NewsGridCard;
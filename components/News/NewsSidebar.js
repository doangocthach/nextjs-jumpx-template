import React, { Component } from 'react';
import Link from 'next/link';

class NewsSidebar extends Component {
    render() {
        return (
            <div className="widget-area" id="secondary">
                <div className="widget widget_search">
                    <h3 className="widget-title">Search Now</h3>

                    <div className="post-wrap">
                        <form className="search-form">
                            <label>
                                <span className="screen-reader-text">Search for:</span>
                                <input type="search" className="search-field" placeholder="Search..." />
                            </label>

                            <button type="submit"><i className='bx bx-search'></i></button>
                        </form>
                    </div>
                </div>

                <div className="widget widget-posts-thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <div className="post-wrap">
                        <article className="item">
                            <Link href="/news-details">
                                <a className="thumb">
                                    <span className="fullimage cover bg1" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>February 20, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/news-details">
                                        <a>
                                            Making Peace With The Feast Or Famine Of Freelancing
                                        </a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>

                        <article className="item">
                            <Link href="/news-details">
                                <a className="thumb">
                                    <span className="fullimage cover bg2" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>February 21, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/news-details">
                                        <a>
                                            I Used The Web For A Day On A 50 MB Budget
                                        </a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>

                        <article className="item">
                            <Link href="/news-details">
                                <a className="thumb">
                                    <span className="fullimage cover bg3" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>February  22, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/news-details">
                                        <a>
                                            How To Create A Responsive Popup Gallery?
                                        </a> 
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                        
                        <article className="item">
                            <Link href="/news-details">
                                <a className="thumb">
                                    <span className="fullimage cover bg4" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>February 23, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/news-details">
                                        <a>
                                            Web development the best work in the future for the world
                                        </a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                    </div>
                </div>
                
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <div className="post-wrap">
                        <ul>
                            <li>
                                <Link href="#">
                                    <a>Business <span>(10)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Privacy <span>(20)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Technology <span>(10)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Tips <span>(12)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Uncategorized <span>(16)</span></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="post-wrap">
                        <div className="tagcloud">
                            <Link href="#">
                                <a>IT Solution (3)</a>
                            </Link>
                            <Link href="#">
                                <a>Uncategorized (3)</a>
                            </Link>
                            <Link href="#">
                                <a>Tips (2)</a>
                            </Link>
                            <Link href="#">
                                <a>AI Solution (2)</a>
                            </Link>
                            <Link href="#">
                                <a>Technology (1)</a>
                            </Link>
                            <Link href="#">
                                <a>Privacy (1)</a>
                            </Link>
                            <Link href="#">
                                <a>Business (1)</a>
                            </Link>
                        </div>
                    </div>
                </div>       
            </div>
        );
    }
}

export default NewsSidebar;
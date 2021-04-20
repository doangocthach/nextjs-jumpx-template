import React, { Component } from 'react';
import Link from 'next/link';

class Partner extends Component {
    render() {
        return (
            <div className="brand-area">
                <div className="container">
                    <div className="brand-list">
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

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand9.png" alt="Image" />
                                </a>
                            </Link>
                        </div>

                        <div className="single-brand">
                            <Link href="#">
                                <a>
                                    <img src="/images/brands/brand10.png" alt="Image" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partner;
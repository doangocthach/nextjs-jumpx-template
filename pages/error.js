import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {
    render() {
        return (
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="error-content-wrap">
                            <h1>4 <span>0</span> 4</h1>
                            <h3>Oops! Page Not Found</h3>
                            <p>The page you were looking for could not be found.</p>

                            <Link href="/">
                                <a className="default-btn btn-two">
                                    Return To Home Page
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;
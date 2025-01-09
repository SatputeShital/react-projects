import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ImgTable() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body" style={{ backgroundImage: 'url(/bg2.jpg)', backgroundSize: 'cover' }}>
                            <h5 className="card-title">React Framework</h5>
                            <p className="card-text">
                                React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgTable;
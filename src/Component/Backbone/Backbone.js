import React from 'react';
import './Backbone.css'
import globe from '../../assets/globe.png'

const Backbone = () => {
    return (
        <div className="backbone pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pt-5">
                        <div className="container mt-5 pt-5 pb-3">
                            <h2 className="mt-5 pt-5">The Backbone for Internet Business Worldwide</h2>
                            <h4 className="mt-4 pt-4 mb-5">Add di!erent types of vehicles in the same app easily. Started with scooters, but want to add bikes? No problem! We’ll help you</h4>
                            <a className="btn btn-lg mt-5 mb-4" href="#" role="button">get Started</a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 pt-4">
                        <img src={globe} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Backbone;
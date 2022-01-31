import './OperatorApplication.css'
import operator from '../../assets/oparetor mobile.png'
import realtimeLocation from '../../assets/realtimelocation.svg'
import fastUnlocking from '../../assets/fastunlocking.svg'
import multipleLanguage from '../../assets/multiplelanguage.svg'


import React from 'react';

const OperatorApplication = () => {
    return (
        <div className="row container mt-5 pt-5 mb-4 pb-4">
            <div className="col-md-6 operator-application">
                <div className="container">
                    <img src={operator} alt="" />
                </div>
            </div>

            <div className="col-md-6 right-side-user">
                <div className="container">
                    <h4>Operator Application</h4>
                    <h2>Smart Vehicle Task Tracking App </h2>
                    <div className="mt-4 pt-3">
                        <div className="d-flex p-3 mt-3">
                            <img className="user-image-1" src={realtimeLocation} alt="" />
                            <p className="text-center ps-4 ms-2 mt-2">Smart Vehicle Task Management</p>
                        </div>
                        <div className="d-flex p-3 mt-3">
                            <img className="user-image-2" src={fastUnlocking} alt="" />
                            <p className="text-center ps-4 ms-2 mt-2">Find problematic Vehicles by Advanced filters</p>
                        </div>
                        <div className="d-flex p-3 mt-3">
                            <img className="user-image-3" src={multipleLanguage} alt="" />
                            <p className="text-center ps-4 ms-2 mt-2">Real Time navigation</p>
                        </div>
                        <a className="btn btn-lg mt-4" href="#" role="button">Learn More</a>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OperatorApplication;
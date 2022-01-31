/* eslint-disable no-undef */
import React, { Suspense, useEffect } from 'react';
import './Backbone.css'
import styled from 'styled-components';
import globe from '../../assets/globe.png'
import {Canvas} from "@react-three/fiber"
import Earth from './Earth';




const Backbone = () => {


    return (
        <div className="backbone pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pt-5">
                        <div className="container mt-5 pt-5 pb-3">
                            <h2 className="mt-5 pt-5">We help people to move earth friendly around the world</h2>
                            <h4 className="mt-4 pt-4 mb-5">Add di!erent types of vehicles in the same app easily. Started with scooters, but want to add bikes? No problem! We’ll help you</h4>
                            <a className="btn btn-lg mt-5 mb-4" href="#" role="button">get Started</a>
                        </div>
                    </div>
                    <div className="col-md-6 pt-5">
                        
                        <Canvas>
                            <Suspense fallback={null}>
                                <Earth></Earth>
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Backbone;
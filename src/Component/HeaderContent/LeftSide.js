import React from 'react';
import './LeftSide.css'
import yadea from '../../assets/yadea.png'
import acton from '../../assets/acton.png'
import goveces from '../../assets/govecs.png'
import okai from '../../assets/okai.png'

const LeftSide = () => {
    return (
        <div className="left-side container mt-5 pt-3">
            <h2>Most Advanced Vehicle Sharing Platform</h2>
            <a className="btn btn-lg" href="#" role="button">get Started</a>
            <p className="left-side-brand mt-5 pt-5"> <span className="gray-color">Trusted by</span> <span><img src={yadea} alt="" /></span> <span> <img src={acton} alt="" /></span> <span><img src={goveces} alt="" /></span> <span><img src={okai} alt="" /></span></p>
        </div>
    );
};

export default LeftSide;
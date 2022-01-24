import React from 'react';
import coverphoto from '../../assets/first-cover.png'
import './RightSide.css'

const RightSide = () => {
    return (
        <div className = "header-image">
            <img src={coverphoto} alt="" />
        </div>
    );
};

export default RightSide;
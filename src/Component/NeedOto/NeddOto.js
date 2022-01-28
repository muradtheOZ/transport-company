import React from 'react';
import './NeddOto.css'

import arrow from '../../assets/Arrow.png'

const NeddOto = () => {
    return (
        <div className="oto">
            <div className=" container pb-5 ">
                <h2 className="pt-5"> Need OTO Applications?</h2>
                <h4 className="pt-3">Contact with us <img src={arrow} alt="" /> </h4>
                <hr className="hr-style mb-4" />
            </div>
        </div>

    );
};

export default NeddOto;
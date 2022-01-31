import React from 'react';
import './NeddOto.css'

import arrow from '../../assets/Arrow.png'

const NeddOto = () => {
    return (
        <div className="oto ">
            <div className=" container pb-5 pe-5 me-5">
                <h2 className="pt-5"> Ready to launch your business with</h2>
                <h2 className="pt-2">Most advanced platform? </h2>
                <h4 className="pt-3">Contact with us <img src={arrow} alt="" /> </h4>
                <hr className="hr-style mb-4" />
            </div>
        </div>

    );
};

export default NeddOto;
import React from 'react';
import './SuccessOnOtoRide.css'
import coma from '../../assets/successonotobg.png'
import successotoavatar from '../../assets/successotoavatar.png'
import successotoright from '../../assets/successotoright.png'
import hayde from '../../assets/hayde.png'
import igjit from '../../assets/igjit.png'


const SuccessOnOtoRide = () => {
    return (
        <div className="text-center mt-5 pt-5 back-part">
            <div className="success pt-5 mt-5 front-image">
                <h4>CLIENTS</h4>
                <h2>Success on OTORide</h2>
            </div>

            <div className="container top-overlay dark-background">
                <div className=" container top-button m-5 p-5  row">
                    <div className="col-md-2">
                        <img className="btn" src={hayde} alt="" />

                    </div>

                    <div className="col-md-2">
                        <img className="btn" src={igjit} alt="" />

                    </div>
                    <div className="col-md-2">
                        <img className="btn" src={hayde} alt="" />

                    </div>
                    <div className="col-md-2">
                        <img className="btn" src={hayde} alt="" />

                    </div>
                    <div className="col-md-2">
                        <img className="btn" src={hayde} alt="" />

                    </div>
                </div>
                <div className="down-part row ps-5 pe-5 pb-5 ms-2 me-2">
                    <div className="col-md-4   pb-4 mb-4">
                        <img src={successotoright} alt="" />
                    </div>

                    <div className="col-md-8 bg-light pt-5  pb-5 mb-5 ps-5">
                        <div className="d-flex mt-4 pt-3">
                            <div>
                            <img className="success-avatar" src={successotoavatar} alt="" />
                            </div>
                            
                            <div>
                                <h5 className="success-heading ps-4">Rahim Darex</h5>
                                <p className="gray-text">CEO, Ignite</p>
                            </div>
                        </div>

                        <div>
                            <p className="gradient-text pe-5 pt-5">Mario Rautenberg ist zum Chief Financial Officer von Wunder Mobility ernannt worden. Mario Rautenberg ist zum Chief Financial Officer von Wunder Mobility ernannt worden. </p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default SuccessOnOtoRide;
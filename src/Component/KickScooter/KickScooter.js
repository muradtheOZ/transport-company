import React from 'react';
import './KickScooter.css'
import scooter1 from '../../assets/scooter1.png'
import scooter2 from '../../assets/scooter2.png'
import scooter3 from '../../assets/scooter3.png'
import scooter4 from '../../assets/scooter4.png'

const KickScooter = () => {
    return (
        <div className="scooter">
            <div className="mt-4 pt-3">
                <div className="heading-part text-center">
                    <h2 className="container text-center mt-4 pt-3 mb-3">Kick scooters, scooters, bikes, e-bikes and more in one app</h2>
                    <p className="container text-center mt-5 pt-4"><a className="btn btn-lg " href="#" role="button">get Started</a></p>
                </div>

                <div className="row mt-5 pt-4">

                    <div className="col-md-3 ps-3 pe-4">
                        <img src={scooter1} alt="" />
                    </div>
                    <div className="col-md-3 ps-3 pe-4">
                        <img src={scooter2} alt="" />
                    </div>
                    <div className="col-md-3 ps-3 pe-4">
                        <img src={scooter3} alt="" />
                    </div>
                    <div className="col-md-3 ps-3 pe-4">
                        <img src={scooter4} alt="" />
                    </div>

                </div>

            </div>
        </div>

    );
};

export default KickScooter;
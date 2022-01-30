import './AdminApplication.css'
import  laptop1 from '../../assets/laptop1.png'
import  laptop2 from '../../assets/laptop2.png'
import  laptop3 from '../../assets/laptop3.png'

import  user from '../../assets/user.svg'
import  trip from '../../assets/trip.svg'
import  offers from '../../assets/offers.svg'


import React, { useEffect, useState } from 'react';

const AdminApplication = () => {
    const[imageData,setImageData] = useState(laptop1)
    let [count,setCount] = useState(0)

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCount(count++);
            if(count % 3 === 1){
                setImageData(laptop1);
                if(count > 3){
                    setCount(1)
                }

            }
            else if(count % 3 === 2){
                setImageData(laptop2);
                if(count > 3){
                    setCount(1)
                }
            }
            else{
                setImageData(laptop3);
                if(count > 3){
                    setCount(1)
                }
            }
        }, 3000);
        
        return () => clearInterval(interval);
      }, []);
    return (
        <div className="row mt-5 pt-5 mb-5 pb-5">
            <div className="col-md-6 left-side-user">
            <div className="container ms-5 ps-5">
                <h4>Admin Application</h4>
                <h2>The perfect app for your users and you</h2>
                <div className="mt-4 pt-3">
                    <div className="d-flex p-3 mt-3">
                        <img className="user-image-1" src={user} alt="" />
                        <p className="text-center ps-4 ms-2 mt-2">User Management</p>
                    </div>
                    <div className="d-flex p-3 mt-3">
                        <img className="user-image-2" src={trip} alt="" />
                        <p className="text-center ps-4 ms-2 mt-2">Fast Unlocking & Locking</p>
                    </div>
                    <div className="d-flex p-3 mt-3">
                        <img className="user-image-3" src={offers} alt="" />
                        <p className="text-center ps-4 ms-2 mt-2">Multiple Language Support</p>
                    </div>
                    <a className="btn btn-lg mt-4" href="#" role="button">Learn More</a>

                </div>

            </div>
            </div>
            <div className="col-md-6 admin-application">
                <img src={imageData} alt="" />
            </div>

        </div>
    );
};

export default AdminApplication;
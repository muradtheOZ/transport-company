import './AdminApplication.css'
import  laptop1 from '../../assets/laptop1.png'
import  laptop2 from '../../assets/laptop2.png'
import  laptop3 from '../../assets/laptop3.png'

import  user from '../../assets/user.svg'
import  trip from '../../assets/trip.svg'
import  offers from '../../assets/offers.svg'


import React, { useEffect, useState } from 'react';

const AdminApplication = () => {
    const[imageData,setImageData] = useState("https://i.ibb.co/80jHjxv/laptop1.png")
    let [count,setCount] = useState(0)

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCount(count++);
            if(count % 3 === 1){
                setImageData("https://i.ibb.co/80jHjxv/laptop1.png");
                if(count > 3){
                    setCount(1)
                }

            }
            else if(count % 3 === 2){
                setImageData("https://i.ibb.co/c6w1Ctr/laptop2.png");
                if(count > 3){
                    setCount(1)
                }
            }
            else{
                setImageData("https://i.ibb.co/S3bvVkc/laptop3.png");
                if(count > 3){
                    setCount(1)
                }
            }
        }, 3000);
        
        return () => clearInterval(interval);
      }, []);
    return (
        <div className="mt-4 mb-4 pt-5">
        <div className="admin-application-main-class container row m-auto">
            <div className="col-md-6 left-side-user">
            <div className="">
                <h4>Admin Application</h4>
                <h2>Super Powerful Real Time Dashboard</h2>
                <div className="mt-4 pt-3">
                    <div className="d-flex p-3 mt-3">
                        <img className="user-image-1" src={user} alt="" />
                        <p className="text-center ps-4 ms-2 mt-2">Real Time Operation Control </p>
                    </div>
                    <div className="d-flex p-3 mt-3">
                        <img className="user-image-2" src={trip} alt="" />
                        <p className="text-center ps-4 ms-2 mt-2">High Level of Details Monitoring</p>
                    </div>
                    <div className="d-flex p-3 mt-3">
                        <img className="user-image-3" src={offers} alt="" />
                        <p className="text-center ps-4 ms-2 mt-2">Fast Customer Acquisition tool.</p>
                    </div>
                    <a className="btn btn-lg mt-4" href="#" role="button">Learn More</a>

                </div>

            </div>
            </div>
            <div className="mt-3 col-md-6 admin-application">
                <img src={imageData} alt="" />
            </div>

        </div>
        </div>
    );
};

export default AdminApplication;
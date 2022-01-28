import React from 'react';
import './Payments.css'
import visa from '../../assets/visa.png'
import login from '../../assets/login.png'
import discount from '../../assets/discount.png'

const Payments = () => {
    return (
        <div className="payment">
            <div className="d-flex container mt-5 pt-5">
                <h2>A fully integrated suite of payments products</h2>
                <h4>Add different types of vehicles in the same app easily. Started with scooters, but want to add bikes? No problem! We’ll help you</h4>
            </div>

            <div className="d-flex container mt-5 pt-5">
                <div>
                <img className="visa" src={visa} alt="" />
                <img className="discount mt-4 pt-4" src={discount} alt="" />
                </div>
                <div>
                <img className="login" src={login} alt="" />
                </div>
                
            </div>

        </div>
    );
};

export default Payments;
import React from 'react';
import './Footer.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <div>
           
            <footer class="text-center text-white">
                
                <div class="container pt-4">

               <section class="">
                   <div>
                       <h2 className ="footer-h2 ps-5 ms-4">OTOride</h2>
                   </div>
                       
                        <div class="row footer-link pt-5">
                            
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-3">
                                <h5 class="text-uppercase">Products</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Bike</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">eBike</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white"> Scooter </a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Rent</a>
                                    </li>

                                    <li>
                                        <a href="#!" class="text-white">iot</a>
                                    </li>
                                </ul>
                            </div>
                           
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-3">
                                <h5 class="text-uppercase">Products</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Story</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Press</a>
                                    </li>
                                </ul>
                            </div>
                           
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-3">
                                <h5 class="text-uppercase">Location</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Flat B4, House 02/A, Road 1, Niketon, Gulshan 1, Dhaka - 1212</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-3">
                                <h5 class="text-uppercase">Social Connection</h5>

                                <ul class="list-unstyled mb-3">
                                    <li>
                                        <a href="#!" class="text-white"><img class="p-3" src={facebook} alt="" /> <img class="p-3" src={twitter} alt="" /> <img class="p-3" src={linkedin} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                        
                    </section>
                   
                </div>
                
                
            </footer>
           
        </div>
    );
};

export default Footer;
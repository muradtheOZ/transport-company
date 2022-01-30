import React, { useState } from 'react';
import './SuccessOnOtoRide.css'
import coma from '../../assets/successonotobg.png'
import successotoavatar from '../../assets/successotoavatar.png'
import successotoright from '../../assets/successotoright.png'
import successotoavatartwo from '../../assets/successotoavatartwo.png'
import successotorighttwo from '../../assets/successotorighttwo.jpg'
import hayde from '../../assets/hayde.png'
import igjit from '../../assets/igjit.png'


const SuccessOnOtoRide = () => {
    const[imageDataOne, setImageData1] = useState(successotoright)
    const[imageDataTwo, setImageData2] = useState(successotoavatar)
    const[name,setName] = useState("Rahim Darex")
    const[position,setPosition] = useState("CEO, Ignite")
    const[description,setDescription] = useState("Mario Rautenberg ist zum Chief Financial Officer von Wunder Mobility ernannt worden. Mario Rautenberg ist zum Chief Financial Officer von Wunder Mobility ernannt worden.")
    const[button1,setButton1] = useState("inactive btn")
    const[button2,setButton2] = useState("active btn")
    const[button3,setButton3] = useState("inactive btn")
    const[button4,setButton4] = useState("inactive btn")
    const[button5,setButton5] = useState("inactive btn")
    const[hovered,setHover] = useState(false)

    const setDatasetTwo =()=>{
        setHover(true)
        setImageData1("https://i.ibb.co/cw3mwMd/successotoright.png")
        setImageData2("https://i.ibb.co/XZr1dDv/successotoavatar.png")
        setName("Leonard Park")
        setPosition("CEO, Hayde")
        setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.")
    }

    const setDatasetOne =()=>{
        setHover(true)
        setImageData1("https://i.ibb.co/fpsjGMz/successotorighttwo.jpg")
        setImageData2("https://i.ibb.co/FxhSbhd/Successotoavatartwo.png")
        setName("Rahim Darex")
        setPosition("CEO, Ignite")
        setDescription("Mario Rautenberg ist zum Chief Financial Officer von Wunder Mobility ernannt worden. Mario Rautenberg ist zum Chief Financial Officer von Wunder Mobility ernannt worden.")
    }

    const MouseOverButton1 =()=>{
        setButton1("active btn")
        makeAllOtherInactive("button1")
        setDatasetTwo()
        
    }

    

    const MouseOverButton2 =()=>{
        setButton2("active btn")
        makeAllOtherInactive("button2")
        setDatasetOne()
    }

    const MouseOverButton3 =()=>{
        setButton3("active btn")
        makeAllOtherInactive("button3")
        setDatasetTwo()
    }

    const MouseOverButton4 =()=>{
        setButton4("active btn")
        makeAllOtherInactive("button4")
        setDatasetTwo()

    }
    const MouseOverButton5 =()=>{
        setButton5("active btn")
        makeAllOtherInactive("button5")
        setDatasetTwo()
    }


    const makeAllOtherInactive =(button)=>{
        if (button === "button1"){
            setButton2("btn")
            setButton3("btn")
            setButton4("btn")
            setButton5("btn")

        }
        else if (button === "button2"){
            setButton1("btn")
            setButton3("btn")
            setButton4("btn")
            setButton5("btn")

        }
        else if (button === "button3"){
            setButton2("btn")
            setButton1("btn")
            setButton4("btn")
            setButton5("btn")

        }
        else if (button === "button4"){
            setButton2("btn")
            setButton3("btn")
            setButton1("btn")
            setButton5("btn")

        }
        else{
            setButton2("btn")
            setButton3("btn")
            setButton4("btn")
            setButton1("btn")
        }
        
    }
    return (
        <div className="text-center mt-5 pt-5 back-part">
            <div className="success pt-5 mt-5 front-image">
                <h4>CLIENTS</h4>
                <h2>Success on OTORide</h2>
            </div>

            <div className="container top-overlay dark-background">
                <div className=" container top-button m-5 p-5  row">
                    <div className="col-md-2">
                        <img className={button1} onMouseOver={MouseOverButton1}   src={hayde} alt="" />

                    </div>

                    <div className="col-md-2">
                        <img className={button2} onMouseOver={MouseOverButton2}  src={igjit} alt="" />

                    </div>
                    <div className="col-md-2">
                        <img className={button3} onMouseOver={MouseOverButton3}  src={hayde} alt="" />

                    </div>
                    <div className="col-md-2">
                        <img className={button4} onMouseOver={MouseOverButton4} src={hayde} alt="" />

                    </div>
                    <div className="col-md-2">
                        <img className={button5} onMouseOver={MouseOverButton5}  src={hayde} alt="" />

                    </div>
                </div>
                <div className={"down-part row ps-5 pe-5 pb-5 ms-2 me-2"}>
                    <div className="col-md-4   pb-4 mb-4">
                        <img src={imageDataOne} alt="" />
                    </div>

                    <div className="col-md-8 bg-light pt-5  pb-5 mb-5 ps-5">
                        <div className="d-flex mt-4 pt-3">
                            <div>
                            <img className="success-avatar" src={imageDataTwo} alt="" />
                            </div>
                            
                            <div>
                                <h5 className="success-heading ps-4">{name}</h5>
                                <p className="gray-text ps-4">{position}</p>
                            </div>
                        </div>

                        <div>
                            <p className="gradient-text  pe-5 pt-5">{description}</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default SuccessOnOtoRide;
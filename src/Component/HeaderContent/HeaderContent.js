import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import './HeaderContent.css'

const HeaderContent = () => {
  return (
    <div>
    <div className="laptop-view">
        <div className="row">
          <div className="col-md-6">
            <div className="ms-5 mt-3 pt-3 ps-5 ">
              <LeftSide></LeftSide>
            </div>
          </div>
          <div className="col-md-6">
            <RightSide></RightSide>
          </div>
        </div>
        </div>
      <div className="mobile-view">
        <div className="row">
          <div className="col-md-6">
            <div className="">
              <LeftSide></LeftSide>
            </div>
          </div>
          <div className="col-md-6">
            <RightSide></RightSide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;

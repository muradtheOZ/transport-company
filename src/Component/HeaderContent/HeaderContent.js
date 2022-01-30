import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const HeaderContent = () => {
    return (
            <div className="row ">
                <div className="col-md-6">
                    <div className="ms-5 mt-3 pt-3 ps-5 ">
                        <LeftSide></LeftSide>
                    </div>
                </div>
                <div className="col-md-6">
                    <RightSide></RightSide>
                </div>

            </div>

    );
};

export default HeaderContent;
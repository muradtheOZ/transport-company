import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const HeaderContent = () => {
    return (
        <div className="ms-5 mt-3 pt-3 ps-5">
            <div className="row">
                <div className="col-md-6">
                    <LeftSide></LeftSide>
                </div>
                <div className="col-md-6">
                    <RightSide></RightSide>
                </div>

            </div>
        </div>

    );
};

export default HeaderContent;
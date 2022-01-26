import React from 'react';

const OtoCard = (data) => {
    console.log("data from card",data)
    return (
        <div>
          <img src={data.data.picture} alt="" />
          <p>{data.data.title}</p>
        </div>
    );
};

export default OtoCard;
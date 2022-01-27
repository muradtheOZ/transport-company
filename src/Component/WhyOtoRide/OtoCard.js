import React from 'react';
import './OtoCard.css'

const OtoCard = (data) => {
  console.log("data from card", data.data.picture)
  return (
    <div className="col-md-3 mt-5 pt-5">
<div className="card custom-card-shadow custom-card-height">
        <img class="custom-top-card-image ps-3 pt-2" src={data.data.picture}  alt="..." />
        <div className="card-body mt-5 pt-5">
          <h5 className="card-title custom-card-title">{data.data.title}</h5>
          <p className="card-text custom-card-text mt-4">{data.data.description}</p>
        </div>
      </div>

    </div>
      
  );
};

export default OtoCard;
import jsonData from '../../assets/otoride.json';
import OtoCard from './OtoCard';
import './OtoRide.css'


const WhyOtoRide = () => {
    console.log(jsonData)
    return (
        <div className="display-oto container mt-5 mb-5">
            <h2 className="ps-3 ms-2 mt-5 extra-margin">Why OTO Ride</h2>
            <div className="row card-area">
                {jsonData.map(data => <OtoCard key={data._id} data={data}></OtoCard>)}

            </div>

        </div>
    );
};

export default WhyOtoRide;
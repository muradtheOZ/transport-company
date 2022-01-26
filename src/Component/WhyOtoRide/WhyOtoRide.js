import jsonData from '../../assets/otoride.json';
import OtoCard from './OtoCard';


const WhyOtoRide = () => {
    console.log(jsonData)
    return (
        <div className="display-oto">
            <h2>Why OTO Ride</h2>
            <div>
            {jsonData.map(data=> <OtoCard key={data._id} data={data}></OtoCard>)}
            </div>
            
        </div>
    );
};

export default WhyOtoRide;
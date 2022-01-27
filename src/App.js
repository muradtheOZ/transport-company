
import './App.css';
import AdminApplication from './Component/AdminAppllication/AdminApplication';
import Header from './Component/HeaderMain/Header';
import KickScooter from './Component/KickScooter/KickScooter';
import OperatorApplication from './Component/OperatorApplication/OperatorApplication';
import UserAplication from './Component/UserAplication/UserAplication';
import WhyOtoRide from './Component/WhyOtoRide/WhyOtoRide';
function App() {
  return (
    <div>
      <Header></Header>
      <WhyOtoRide></WhyOtoRide>
      <UserAplication></UserAplication>
      <AdminApplication></AdminApplication>
      <OperatorApplication></OperatorApplication>
      <KickScooter></KickScooter>

     
    </div>
  );
}

export default App;

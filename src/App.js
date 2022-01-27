
import './App.css';
import AdminApplication from './Component/AdminAppllication/AdminApplication';
import Blog from './Component/Blog/Blog';
import Header from './Component/HeaderMain/Header';
import KickScooter from './Component/KickScooter/KickScooter';
import OperatorApplication from './Component/OperatorApplication/OperatorApplication';
import SuccessOnOtoRide from './Component/SuccessOnOtoRide/SuccessOnOtoRide';
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
      <SuccessOnOtoRide></SuccessOnOtoRide>
      <Blog></Blog>

     
    </div>
  );
}

export default App;

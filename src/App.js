
import './App.css';
import AdminApplication from './Component/AdminAppllication/AdminApplication';
import Blog from './Component/Blog/Blog';
import Header from './Component/HeaderMain/Header';
import KickScooter from './Component/KickScooter/KickScooter';
import OperatorApplication from './Component/OperatorApplication/OperatorApplication';
import Payments from './Component/Payments/Payments';
import UserAplication from './Component/UserAplication/UserAplication';
import WhyOtoRide from './Component/WhyOtoRide/WhyOtoRide';
import Backbone from './Component/Backbone/Backbone';
import NeddOto from './Component/NeedOto/NeddOto';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <WhyOtoRide></WhyOtoRide>
      <UserAplication></UserAplication>
      <AdminApplication></AdminApplication>
      <OperatorApplication></OperatorApplication>
      <KickScooter></KickScooter>
      <Blog></Blog>
      <Payments></Payments>
      <Backbone></Backbone>
      <NeddOto></NeddOto>
      <Footer></Footer>


     
    </div>
  );
}

export default App;

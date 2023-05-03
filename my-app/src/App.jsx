import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main.jsx";
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ServicesContainer from "./components/Services/ServicesContainer";
import LoginContainer from "./components/Login/LoginContainer";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import ServicesManagerContainer from "./components/ServicesManager/ServicesManagerContainer";
import OrdersContainer from "./components/UserOrders/OrdersContainer";
import OrdersManagerContainer from "./components/OrdersManager/OrdersManagerContainer";

const App = (props) => {

  return (
    <BrowserRouter>
        <div className='app-wrapper'>
              <HeaderContainer />
         <div className='app-wrapper-content'>
             <Routes>
                 <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                 <Route path="/profile/*" element={<ProfileContainer store={props.store}/>}/>
                 <Route path="/Main" element={<Main/>}/>
                 <Route path="/services" element={<ServicesContainer/>}/>
                 <Route path="/users" element={<UsersContainer/>}/>
                 <Route path="/login" element={<LoginContainer />}/>
                 <Route path="/registration" element={<RegistrationContainer />}/>
                 <Route path="/EditServices" element={<ServicesManagerContainer />}/>
                 <Route path="/AllOrders" element={<OrdersManagerContainer />}/>
             </Routes>
         </div>
        </div>
     </BrowserRouter>
  );
};

export default App;

import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import Home from './Home';
import { Routes, Route,useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Help from './Components/Help';
import Notfound from './Components/Notfound';
import UserLogin from './Components/UserLogin';
import UserRegister from './Components/UserRegister';
import DriverLogin from './Components/DriverLogin';
import DriverRegister from './Components/DriverRegister';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserView from "./Components/UserView";
import DriverView from "./Components/DriverView";
import { UserProvider } from "./Components/usercontext";


 




function App() {
  return (

   
    
  

    <div className="App">
   
      <ResponsiveAppBar/>
      <UserProvider>
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/userregister" element={<UserRegister/>}/>
      <Route path="/userview" element={<UserView/>}/>
      <Route path="/driverlogin" element={<DriverLogin/>} />
      <Route path="/driverregister" element={<DriverRegister/>} />
      <Route path="/driverview" element={<DriverView/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="*" element={<Notfound/>} />
      
      </Routes>
      </UserProvider>

      <ToastContainer autoClose={3000} />
     
    </div>
   

  );
}

export default App;

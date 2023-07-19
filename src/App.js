import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import { Provider } from "react-redux";
import Counter from "./userside/Containar/counter/Counter";
import { configureStore } from "./userside/redux/Store";
import Home from "./userside/Containar/Home";

function App() {
  
  return (
   
    //  <h1>Hello</h1>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      
     
  );
}

export default App;

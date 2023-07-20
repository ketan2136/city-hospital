import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import { Provider } from "react-redux/es";
import { configureStore } from "./userside/redux/Store";
// import { Provider } from "react-redux";
// import Counter from "./userside/Containar/counter/Counter";
// import { configureStore } from "./userside/redux/Store";
// import Home from "./userside/Containar/Home";

function App() {
  const store = configureStore ();

  return (

    //  <h1>Hello</h1>
    // <Routes>
    //   <Route exact path='/' element={<Home />} />
    // </Routes>
    <Provider store={store}>


      <Routes>
        <Route path='/*' element={<User />} />
        <Route element={<PrivateRoute />}>
          <Route path='/admin/*' element={<Admin />} />
        </Route>

      </Routes >

    </Provider>

  );



}

export default App;

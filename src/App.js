import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import { Provider } from "react-redux/es";
import { ThemeProvider } from "./ConText/ThemeProvider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./userside/redux/Store";
// import { PersistGate } from 'redux-persist/es/integration/react'
// import { Provider } from "react-redux";
// import Counter from "./userside/Containar/counter/Counter";
// import { configureStore } from "./userside/redux/Store";
// import Home from "./userside/Containar/Home";

function App() {
  // const store = configureStore();

  return (

    //  <h1>Hello</h1>
    // <Routes>
    //   <Route exact path='/' element={<Home />} />
    // </Routes>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Routes>
            <Route path='/*' element={<User />} />
            <Route element={<PrivateRoute />}>
              <Route path='/admin/*' element={<Admin />} />
            </Route>
          </Routes >
        </ThemeProvider>
      </PersistGate>
    </Provider>

  );



}

export default App;

import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import { Provider } from "react-redux";
import Counter from "./userside/Containar/counter/Counter";
import { configureStore } from "./userside/redux/Store";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      {/* <Counter path='/counter'/> */}
      <Routes>
        <Route path='/*' element={<User />} />
        <Route element={<PrivateRoute />}>
          <Route path='/admin/*' element={<Admin />} />
        </Route>

      </Routes>
      
      </Provider>
  );
}

export default App;

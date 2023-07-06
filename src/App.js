import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<User />} />
        <Route element={<PrivateRoute />}>
          <Route path='/admin/*' element={<Admin />} />
        </Route>

      </Routes>

    </>
  );
}

export default App;

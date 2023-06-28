import User from "./Routes/User";
import Admin from "./Routes/Admin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<User/>}></Route>
        <Route path='/admin/*' element={<Admin/>}></Route>
      </Routes>

    </>
  );
}

export default App;

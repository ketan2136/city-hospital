import React from 'react';
import Muidrower from "../admin/components/Muidrower";
import Appoiments from "../admin/components/container/Appoiments";
import Doctordrower from "../admin/components/container/doctor/Doctordrower";
import Time from "../admin/components/container/Time";
import Login from "../admin/components/container/Login";
// import Info from "../admin/components/container/Info";
import Info from "../admin/components/container/Info"

import { Route, Routes } from 'react-router-dom';
import Medicine from '../admin/components/container/medicines/Medicine';
import Desboard from '../admin/components/container/Desboard/Desboard';
import { configureStore } from '../userside/redux/Store';
import { Provider } from 'react-redux';
import Doctor from '../admin/components/container/doctor/Doctor';


function Admin(props) {
  let store = configureStore()
  return (

    <Provider store={store}>
      <Muidrower>
        <Routes>
          <Route >
            <Route path='/' element={<Desboard />} />
          </Route>
          <Route path='/Doctordrower' element={<Doctor />}></Route>
          <Route path='/Appoiments' element={<Appoiments />}></Route>
          <Route path='/Time' element={<Time />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Info' element={<Info />}></Route>
          <Route path='/medicine' element={<Medicine />}></Route>
        </Routes>
      </Muidrower>
    </Provider>
  );
}

export default Admin;
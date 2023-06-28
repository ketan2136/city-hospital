import React from 'react';
import Muidrower from "../admin/components/Muidrower";
import Appoiments from "../admin/components/container/Appoiments";
import Doctordrower from "../admin/components/container/Doctordrower";
import Time from "../admin/components/container/Time";
import Login from "../admin/components/container/Login";
import Info from "../admin/components/container/Info";
import Medicine from "../admin/components/container/Medicine";
import { Route, Routes } from 'react-router-dom';


function Admin(props) {
    return (
        <Muidrower>
        <Routes>
          <Route path='/Doctordrower' element={<Doctordrower />}></Route>
          <Route path='/Appoiments' element={<Appoiments />}></Route>
          <Route path='/Time' element={<Time />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Info' element={<Info />}></Route>
          <Route path='/medicine' element={<Medicine />}></Route>
        </Routes>
      </Muidrower>
    );
}

export default Admin;
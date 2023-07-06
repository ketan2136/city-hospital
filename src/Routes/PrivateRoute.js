import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {

    let localData = localStorage.getItem("loginstatus")

    return (
        localData ? <Outlet /> : <Navigate to={'/Auth1'} replace />
    );
}

export default PrivateRoute;
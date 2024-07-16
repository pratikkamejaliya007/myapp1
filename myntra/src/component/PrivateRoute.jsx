import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const log = useSelector((state) => state.log);
  return log ? <Component {...rest} /> : <Navigate to="/Login" />;
};

export default PrivateRoute;

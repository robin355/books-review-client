import { React, useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    if (user) {
        return children;
    }
    else {
        <Navigate to='/logins' state={{ from: location }} replace ></Navigate>
    }
};

export default PrivateRouter;
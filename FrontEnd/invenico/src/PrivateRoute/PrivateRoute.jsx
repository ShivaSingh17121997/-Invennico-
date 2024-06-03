import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContex';
import { AuthContexts } from '../Context/AuthContextProvider';

const PrivateRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContexts)

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default PrivateRoute;

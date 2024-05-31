import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const isAuth = true;

    if (!isAuth) {
        return <Navigate to="/login" />
    }
    return (
        <div>
            {children}
        </div>
    )
}

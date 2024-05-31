import React from 'react'
import Home from './Home'
import Login from './Login'
import { Routes, Route } from "react-router-dom"
import FormPage from './FormPage'
import SinglueUserPage from './SingleUserPage'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>} />


                <Route path="/form" element={
                    <PrivateRoute>
                        <FormPage />
                    </PrivateRoute>} />


                <Route path="/singlesuser" element={<SinglueUserPage />} />

                <Route path="/login" element={<Login />} />


            </Routes>
        </div>
    )
}

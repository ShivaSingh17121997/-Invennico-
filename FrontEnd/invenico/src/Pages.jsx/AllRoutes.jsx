import React from 'react'
import Home from './Home'
import Login from './Login'
import { Routes, Route } from "react-router-dom"
import FormPage from './FormPage'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/form" element={<FormPage />} />
                
            </Routes>
        </div>
    )
}

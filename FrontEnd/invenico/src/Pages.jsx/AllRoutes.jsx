import React from 'react'
import Home from './Home'
import Login from './Login'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

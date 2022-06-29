import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import { Carrinho } from '../pages/Carrinho'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/carrinho" element={<Carrinho />} />

                <Route path="/login" element={<Login />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}
import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { SignIn } from "../pages/SignIn/SignIn";

export const AuthRoutes: React.FC = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/SignIn"element={<SignIn/>} />
        </Routes>
    </BrowserRouter>
)

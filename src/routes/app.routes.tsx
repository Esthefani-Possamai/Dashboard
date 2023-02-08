import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from "../components/Layout/Layout";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Listas } from "../pages/Listas/Listas";

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/list/:type" element={<Listas />} />
                    </Routes>
            </Layout>
        </BrowserRouter>
    )
}
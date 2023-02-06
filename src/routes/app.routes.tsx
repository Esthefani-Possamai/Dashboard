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

{/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
            <Route path='/page4' element={<Page4 />} />
          </Routes>
        </BrowserRouter> */}
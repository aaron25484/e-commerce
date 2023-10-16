import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SalesPage from "../components/Category/Sales";
import { FC } from "react";
import NewArrivalsPage from "../components/Category/NewArrivals";
import ClassicsPage from "../components/Category/Classics";
import BestSellersPage from "../components/Category/BestSellers";
import BackCataloguePage from "../components/Category/BackCatalogue";
import BackButton from "./BackButton";
import { ProductsPage } from "../components/Products/Products";
import Checkout from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../context/AuthContext";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar/Navbar";

export const RouterPaths:FC<any> = () => {
    
    const {state} = useAuth()

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/:id" element={<ProductsPage />} />
                    <Route path="/new Arrivals" element={<NewArrivalsPage />} />
                    <Route path="/classics" element={<ClassicsPage />} />
                    <Route path="/sales" element={<SalesPage />}/>
                    <Route path="/best Sellers" element={<BestSellersPage />} />
                    <Route path="/back to Catalogue" element={<BackCataloguePage />} /> 
                    <Route path="/login" element={<LoginPage />} />
                    {state.isLogged ? (
                    <Route path="/checkout" element={<Checkout />} />
                    ) : (
                    <Route path="/checkout" element={<Navigate to="/Login" />} />
                )}
                </Routes>
                <BackButton />
            </BrowserRouter>
        </>
    )
}
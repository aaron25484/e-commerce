import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Category from "./carouselHome";
import SalesPage from "../components/Category/Sales";
import { FC } from "react";
import NewArrivalsPage from "../components/Category/NewArrivals";
import ClassicsPage from "../components/Category/Classics";
import BestSellersPage from "../components/Category/BestSellers";
import BackCataloguePage from "../components/Category/BackCatalogue";
import BackButton from "./BackButton";
import { ProductsPage } from "../components/Products/Products";
import Checkout from "../pages/CheckoutPage";
import LoginPage from "./LoginPage";
import { useAuth } from "./AuthContext";


export const RouterPaths:FC<any> = () => {
    
    const {state} = useAuth()

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Category />}/>
                    <Route path="/:id" element={<ProductsPage />} />
                    <Route path="/New Arrivals" element={<NewArrivalsPage />} />
                    <Route path="/Classics" element={<ClassicsPage />} />
                    <Route path="/Sales" element={<SalesPage />}/>
                    <Route path="/Best Sellers" element={<BestSellersPage />} />
                    <Route path="/Back to Catalogue" element={<BackCataloguePage />} /> 
                    <Route path="/Login" element={<LoginPage />} />
                    {state.isLogged ? (
                    <Route path="/Checkout" element={<Checkout />} />
                    ) : (
                    <Route path="/Checkout" element={<Navigate to="/Login" />} />
                )}
                </Routes>
                <BackButton />
            </BrowserRouter>
        </>
    )
}
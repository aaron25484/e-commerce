import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./carouselHome";
import SalesPage from "../components/Category/Sales";
import { FC } from "react";
import NewArrivalsPage from "../components/Category/NewArrivals";
import ClassicsPage from "../components/Category/Classics";
import BestSellersPage from "../components/Category/BestSellers";
import BackCataloguePage from "../components/Category/BackCatalogue";
import BackButton from "./BackButton";

export const RouterPaths:FC<any> = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Category />}/>
                    <Route path="/New Arrivals" element={<NewArrivalsPage />} />
                    <Route path="/Classics" element={<ClassicsPage />} />
                    <Route path="/Sales" element={<SalesPage />}/>
                    <Route path="/Best Sellers" element={<BestSellersPage />} />
                    <Route path="/Back to Catalogue" element={<BackCataloguePage />} />
                </Routes>
                <BackButton />
            </BrowserRouter>
        </>
    )
}
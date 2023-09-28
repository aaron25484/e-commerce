import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomCategory from "./RandomCategory";
import SalesPage from "../components/Category/Sales";
import { FC } from "react";
import NewArrivalsPage from "../components/Category/NewArrivals";
import ClassicsPage from "../components/Category/Classics";
import BestSellersPage from "../components/Category/BestSellers";
import BackCataloguePage from "../components/Category/BackCatalogue";

export const RouterPaths:FC<any> = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RandomCategory />}/>
                    <Route path="/NewArrivals" element={<NewArrivalsPage />} />
                    <Route path="/Classics" element={<ClassicsPage />} />
                    <Route path="/Sales" element={<SalesPage />}/>
                    <Route path="/BestSellers" element={<BestSellersPage />} />
                    <Route path="/BackCatalogue" element={<BackCataloguePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
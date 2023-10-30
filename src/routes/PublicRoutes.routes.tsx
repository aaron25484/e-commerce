import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import { ProductsPage } from "../components/Products/Products";
import WishlistPage from "../components/Wishlist/Wishlist";
import PrivateRoutes from "./PrivateRoutes.routes";
import Checkout from "../pages/CheckoutPage";
import BackCataloguePage from "../components/Category/BackCatalogue";
import BestSellersPage from "../components/Category/BestSellers";
import ClassicsPage from "../components/Category/Classics";
import NewArrivalsPage from "../components/Category/NewArrivals";
import SalesPage from "../components/Category/Sales";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const RouterPaths: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/checkout/*"
        element={
          <PrivateRoutes>
            <Routes>
              <Route path="/" element={<Checkout />} />
            </Routes>
          </PrivateRoutes>
        }
      />
      <Route path="/:id" element={<ProductsPage />} />
      <Route path="/new Arrivals" element={<NewArrivalsPage />} />
      <Route path="/classics" element={<ClassicsPage />} />
      <Route path="/sales" element={<SalesPage />} />
      <Route path="/best sellers" element={<BestSellersPage />} />
      <Route path="/back to catalogue" element={<BackCataloguePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default RouterPaths;

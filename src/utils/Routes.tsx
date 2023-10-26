import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FC, Suspense } from "react"; // Import Suspense
import BackButton from "./BackButton";
import { ProductsPage } from "../components/Products/Products";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage'));
const NewArrivalsPage = lazy(() => import('../components/Category/NewArrivals'));
const ClassicsPage = lazy(() => import('../components/Category/Classics'));
const SalesPage = lazy(() => import('../components/Category/Sales'));
const BestSellersPage = lazy(() => import('../components/Category/BestSellers'));
const BackCataloguePage = lazy(() => import('../components/Category/BackCatalogue'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const Checkout = lazy(() => import('../pages/CheckoutPage'));

export const RouterPaths: FC<any> = () => {
  const { state } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ProductsPage />} />
          <Route path="/new Arrivals" element={<Suspense fallback={<div>Loading...</div>}><NewArrivalsPage /></Suspense>} />
          <Route path="/classics" element={<Suspense fallback={<div>Loading...</div>}><ClassicsPage /></Suspense>} />
          <Route path="/sales" element={<Suspense fallback={<div>Loading...</div>}><SalesPage /></Suspense>} />
          <Route path="/best Sellers" element={<Suspense fallback={<div>Loading...</div>}><BestSellersPage /></Suspense>} />
          <Route path="/back to Catalogue" element={<Suspense fallback={<div>Loading...</div>}><BackCataloguePage /></Suspense>} />
          <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>} />
          {state.isLogged ? (
            <Route path="/checkout" element={<Suspense fallback={<div>Loading...</div>}><Checkout /></Suspense>} />
          ) : (
            <Route path="/checkout" element={<Navigate to="/Login" />} />
          )}
        </Routes>
        <BackButton />
      </BrowserRouter>
    </>
  );
};

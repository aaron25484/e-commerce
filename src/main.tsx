import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductContextProvider } from "./context/ProductContext.tsx";
import { CartContextProvider } from "./context/CartContext.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { WishContextProvider } from "./context/WishlistContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <WishContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
        </WishContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
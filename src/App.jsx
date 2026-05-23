
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

import Topheader from "./componants/header/Topheader";
import Buttomheader from "./componants/header/Buttomheader";
import Footer from "./componants/Footer/Footer";
import Scroltotop from "./componants/Scroltotop";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Searchresults from "./pages/Searchresults";
import Favorites from "./pages/Favorites/Favorites";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import OrderShipped from "./pages/OrderShipped/OrderShipped";


import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

import { UserProvider, useUser } from "./context/UserContext";

function Protected({ children }) {
  const { currentUser } = useUser();
  if (!currentUser) return <Navigate to="/login" replace />;
  return children;
}

function AppShell() {
  const location = useLocation();
  const { currentUser } = useUser();

  
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!isAuthPage && (
        <header>
          <Topheader />
          <Buttomheader />
        </header>
      )}

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "grey",
            borderRadius: "10px",
            color: "#fff",
          },
        }}
      />

      <Scroltotop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
           <Route path="/order-shipped" element={<OrderShipped />} />
          <Route path="/" element={<Home />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Searchresults />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppShell />
    </UserProvider>
  );
}
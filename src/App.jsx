
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
      
          <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to="/login" replace />}
          />

         
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/register"
            element={currentUser ? <Navigate to="/" replace /> : <Register />}
          />

          <Route
            path="/about"
            element={
              <Protected>
                <About />
              </Protected>
            }
          />
          <Route
            path="/blog"
            element={
              <Protected>
                <Blog />
              </Protected>
            }
          />
          <Route
            path="/contact"
            element={
              <Protected>
                <Contact />
              </Protected>
            }
          />

       
          <Route
            path="/cart"
            element={
              <Protected>
                <Cart />
              </Protected>
            }
          />
          <Route
            path="/favorites"
            element={
              <Protected>
                <Favorites />
              </Protected>
            }
          />
          <Route
            path="/search"
            element={
              <Protected>
                <Searchresults />
              </Protected>
            }
          />
          <Route
            path="/products/:id"
            element={
              <Protected>
                <ProductDetail />
              </Protected>
            }
          />
          <Route
            path="/category/:category"
            element={
              <Protected>
                <CategoryPage />
              </Protected>
            }
          />
          <Route
            path="/order-shipped"
            element={
              <Protected>
                <OrderShipped />
              </Protected>
            }
          />

          
          <Route path="*" element={<Navigate to="/" replace />} />
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
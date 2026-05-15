import { Route, Routes, useLocation } from "react-router-dom"; 
import Buttomheader from "./componants/header/Buttomheader";
import Topheader from "./componants/header/Topheader";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import { Toaster } from "react-hot-toast";
import Scroltotop from "./componants/Scroltotop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Searchresults from "./pages/Searchresults";
import Favorites from "./pages/Favorites/Favorites";
import Footer from "./componants/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import OrderShipped from "./pages/OrderShipped/OrderShipped"; 
import { UserProvider } from "./context/UserContext"; 

function App() {
  const location = useLocation();

  return (
  
    <UserProvider>
      <header>
        <Topheader />
        <Buttomheader />
      </header>
      
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
     
      <Footer /> 
    </UserProvider>
  );
}

export default App;
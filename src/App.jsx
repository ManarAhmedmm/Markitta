import { Route, Routes} from "react-router-dom";
import Buttomheader from "./componants/header/Buttomheader";
import Topheader from "./componants/header/Topheader";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import { useLocation } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import Scroltotop from "./componants/Scroltotop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Searchresults from "./pages/Searchresults";
import Favorites from "./pages/Favorites/Favorites";
import Footer from "./componants/Footer/Footer";
function App() {
const location = useLocation();
  return (
    <>
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
<Scroltotop/>
<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/search" element={<Searchresults />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path="/category/:category" element={<CategoryPage />} />
  </Routes>
</AnimatePresence>

    </>
  );
}

export default App;

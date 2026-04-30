import React from "react";
import { useContext } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegHeart, FaShare } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../componants/context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
function ProductInfo({ product }) {
    const navigate = useNavigate();
    const { cartItems, addtoCart, favoriteItems, addToFavorites, removeFromFavorites } = useContext(CartContext);
const isInCart = cartItems.some((i) => i.id === product.id);

    const ShowToast = ()=>{
  addtoCart(product)
  toast.success(
    <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className='toast-img' />
        <div className="toast-content">
            <strong>
                {product.title}
            </strong>
            added to cart
            <div>
                <button className={isInCart ? "btn in-cart" : "btn"} onClick={()=>navigate("/cart")}>view cart</button>
            </div>
        </div>
    </div>
    ,{duration:3500}
  )
}
const isFavorite = favoriteItems.some((item) => item.id === product.id);
  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>

      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className="price">
        <span>${product.price.toFixed(2)}</span>
      </p>
      <h5>
        Availability:{" "}
        <span>
          {product.availabilityStatus > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="description">{product.description}</p>
      <h5 className="stok">
        <span>Harry up! only {product.stock} left!</span>
      </h5>

     <button 
  onClick={ShowToast} 
  className={isInCart ? "btn in-cart" : "btn"}
>
  {isInCart ? "Item already in cart" : "Add to Cart"} 
  <TiShoppingCart />
</button>

      <div className="icons">
   
        <span
  className={isFavorite ? "icon fav active" : "icon fav"}
  onClick={() => {
    if (isFavorite) {
      removeFromFavorites(product.id);
      toast("Removed from favorites 💔");
    } else {
      addToFavorites(product);
      toast.success("Added to favorites ❤️");
    }
  }}
>
  <FaRegHeart />
</span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;

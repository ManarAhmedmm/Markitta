import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import "./slideProduct.css";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaCheck } from "react-icons/fa";
import toast from 'react-hot-toast';
function Products({ product }) {
const navigate = useNavigate()
const { cartItems, addtoCart , favoriteItems, addToFavorites, removeFromFavorites } = useContext(CartContext);
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
                <button className="btn" onClick={()=>navigate("/cart")}>view cart</button>
            </div>
        </div>
    </div>
    ,{duration:3500}
  )
}
const isFavorite = favoriteItems.some((item) => item.id === product.id);
const handeladdtofav = () => {
  const isFavorite = favoriteItems.some((item) => item.id === product.id);

  if (isFavorite) {
    removeFromFavorites(product.id);

    toast(
      <div className="toast-wrapper">
        <img src={product.images?.[0]} alt="" className='toast-img' />
        <div className="toast-content">
          <strong>{product.title}</strong>
          removed from favorites
        </div>
      </div>,
      { duration: 3500 }
    );

  } else {
    addToFavorites(product);

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images?.[0]} alt="" className='toast-img' />
        <div className="toast-content">
          <strong>{product.title}</strong>
          added to favorites
        </div>
      </div>,
      { duration: 3500 }
    );
  }
};
  return (
    // <div className={isInCart ? "product in-cart" : "product"}>
        <div className={`product ${isInCart ? "in-cart" : ""} ${isFavorite ? "in-fav" : ""}`}>
        <Link to={`/products/${product.id}`} className="link_product">
         <span className='status_cart'>
            <FaCheck /> in cart
         </span>
            <div className="img_product">
            <img src={product.images[0]} alt={product.title} />
        </div>
        <p className="name_product">
           {product.title}
        </p>
        <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
        </div>

        <p className="price"><span>${product.price.toFixed(2)}</span></p>
        </Link>
        <div className="icons">
            <span className='btn_addtocart' onClick={ShowToast}><FaCartArrowDown /></span>
          <span className="btn_fav" onClick={handeladdtofav}>
  <FaRegHeart />
</span>
            <span><FaShare /></span>
        </div>
        </div>
   
  )
}

export default Products

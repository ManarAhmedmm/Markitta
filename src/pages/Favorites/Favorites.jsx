
import React, { useContext } from "react";
import { CartContext } from "../../componants/context/CartContext";
import Products from "../../componants/slideProducts/Products";
import PageTransition from "../../componants/PageTransition";
import { FaRegHeart, FaHeartBroken } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./favorites.css";

function Favorites() {
  const { favoriteItems, removeFromFavorites } = useContext(CartContext);

  return (
    <PageTransition>
      <div className="favorites_page">
        <div className="favorites_container">
          
          {/* Header */}
          <div className="favorites_header">
            <h1>My Favorites <FaRegHeart style={{ color: 'var(--main_color)' }} /></h1>
            <p>All your saved products in one place</p>
          </div>

        
          {favoriteItems.length > 0 ? (
            <div className="favorites_grid">
              {favoriteItems.map((item) => (
                <div key={item.id} className="fav_item_card">
               
                  <div className="product_wrapper">
                    <Products product={item} />
                  </div>

                 
                  <button 
                    className="remove_fav_btn" 
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    <MdDeleteForever /> Remove
                  </button>
                  
                </div>
              ))}
            </div>
          ) : (
         
            <div className="empty_favorites">
              <div className="empty_icon">
                <FaHeartBroken />
              </div>
              <h2>No Favorites Yet</h2>
              <p>Start adding products you love to see them here!</p>
              <a href="/" className="btn shop_now_btn">Start Shopping</a>
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}

export default Favorites;
import React, { useContext } from "react";
import { CartContext } from "../../componants/context/CartContext";
import Products from "../../componants/slideProducts/Products";
import PageTransition from "../../componants/PageTransition";
import { FaHeartBroken } from "react-icons/fa";
import "./favorites.css";

function Favorites() {
  const { favoriteItems, removeFromFavorites } = useContext(CartContext);

  return (
    <PageTransition>
      <div className="favorites_page">

        <div className="favorites_container">

          {/* HEADER */}
          <div className="favorites_header">
            <h1>My Favorites ❤️</h1>
            <p>All your saved products in one place</p>
          </div>

          {/* CONTENT */}
          {favoriteItems.length > 0 ? (
            <>
              <div className="favorites_grid">
                {favoriteItems.map((item) => (
                  <div key={item.id} className="fav_item_wrapper">
                    
                    {/* product */}
                    <Products product={item} />

                    {/* remove button */}
                    <button
                      className="remove_btn"
                      onClick={() => removeFromFavorites(item.id)}
                    >
                      Remove
                    </button>

                  </div>
                ))}
              </div>
            </>
          ) : (
            /* EMPTY STATE */
            <div className="empty_favorites">
              <FaHeartBroken className="icon" />
              <h2>No Favorites Yet</h2>
              <p>Start adding products you love 💔</p>
            </div>
          )}

        </div>

      </div>
    </PageTransition>
  );
}

export default Favorites;
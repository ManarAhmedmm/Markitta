import React, { useEffect, useState } from "react";

export const CartContext = React.createContext();

function CartProvider({ children }) {


  const [favoriteItems, setFavoriteItems] = useState(() => {
    const storedFavoriteItems = localStorage.getItem("favoriteItems");
    return storedFavoriteItems ? JSON.parse(storedFavoriteItems) : [];
  });

  const addToFavorites = (item) => {
    if (!favoriteItems.some((favItem) => favItem.id === item.id)) {
      setFavoriteItems((prevItems) => [...prevItems, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const removeFromFavorites = (id) => {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };


  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addtoCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

 
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addtoCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart, 
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
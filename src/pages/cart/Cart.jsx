import React, { useContext } from 'react';
import { CartContext } from '../../componants/context/CartContext.jsx';
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import PageTransition from '../../componants/PageTransition.jsx';

function Cart() {

  const { cartItems, increaseQuantity, decreaseQuantity, removeItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      clearCart(); 
      navigate("/order-shipped"); 
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <PageTransition>
      <div className='checkout'>
        <div className="ordersummary">
          <h2>Order Summary</h2>
          <div className="items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="item_cart">
                  <div className="img_name">
                    <img src={item.images[0]} alt={item.name} />
                    <div className="contant">
                      <h4>{item.title}</h4>
                      <p className="price_item">${item.price?.toFixed(2)}</p>
                      <div className="quantity_control">
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                  <button className='delete_item' onClick={() => removeItem(item.id)}><FaTrashAlt /></button>
                </div>
              ))
            )}
          </div>

          <div className="button_summary">
            <div className="shop_total">
              <p>Total:</p>
              <span className='total_checkout'>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="button_dev">
              <button type='button' onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

export default Cart;
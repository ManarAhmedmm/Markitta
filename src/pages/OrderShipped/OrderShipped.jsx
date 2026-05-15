
import { useNavigate } from "react-router-dom";
import "./OrderShipped.css";

const OrderShipped = () => {
  const navigate = useNavigate();

  return (
    <div className="order-shipped-container">
      <div className="shipped-box">
        <h1>Order Shipped</h1>
        <p>Thank you for your purchase! Your order is on its way. 🚚</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default OrderShipped;
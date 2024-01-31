import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";
const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  if (cartItems.length === 0) {
    navigate("/");
    return null; // or a loading message, or an empty cart message
  }

  //   remove item from cart
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  //   Clear cart

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="about w-[1200px] mx-auto my-5">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg mb-5">Cart</h1>
        <button
          className="bg-black p-2 mt-5 shadow-lg text-white"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="flex p-5 m-5 shadow-lg">
          <div className="w-[250px] mr-5">
            <img src={item.image} alt="img" className="w-100" />
          </div>
          <div className="text-gray-600">
            <h1 className="font-bold text-lg">{item.title}</h1>
            <p>
              <span>Counts: {item.rating.count}</span>, &nbsp;
              <span>Rating: {item.rating.rate}</span>
            </p>
            <p className="text-green-600">Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>Description: {item.description}</p>

            <button
              className="bg-black p-2 mt-5 shadow-lg text-white"
              onClick={() => handleRemoveItem(item)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

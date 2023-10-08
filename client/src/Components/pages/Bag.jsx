import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

const Bag = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch the removeFromCart action with the item's ID
  };

  return (
    <div className="mt-40">
      {cartItems.length === 0 ? (
        <p className="flex text-2xl sm:text-5xl py-44 sm:p-44 justify-center">Your bag is empty.</p>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-stone-50 rounded-lg shadow-md p-4 m-4"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={`/api/v1/product/product-photo/${item._id}`}
                    alt={item.name}
                    className="h-80 object-cover rounded-lg mb-2"
                  />
                  <h2 className="text-x uppercase font-semibold">
                    {item.name}
                  </h2>
                  <p className="text-lg font-bold text-pink-600">
                    Rs. {item.price}
                  </p>
                  <button
                    onClick={(e) => {
                      toast.success("Order Placed Succesfully");
                      handleRemoveFromCart(item._id);
                    }}
                    className="text-black mb-2 text-sm py-2 px-4 border-pink-600 border-2 rounded-full text-center"
                  >
                    Buy Now
                  </button>
                  <button
                    className="text-black text-sm py-2 px-4 border-pink-600 border-2 rounded-full text-center"
                    onClick={() => handleRemoveFromCart(item._id)} // Pass the item's ID to the handler
                  >
                    Remove From Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bag;

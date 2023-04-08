import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="text-center">
      <h2 className="text-center">Order Summary</h2>
      <p>Total added product: {cart.length}</p>
      {cart.map((pd) => (
        <div key={pd._id} className="shadow p-2 my-3">
          <p>
            {pd.name}
            <button onClick={() => removeFromCart(pd._id)} className="btn">
              X
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

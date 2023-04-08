import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import swal from "sweetalert";

const Home = () => {
  const product = useLoaderData();
  const [cart, setCart] = useState([]);

  // add to cart
  const handleCart = (pd) => {
    const exists = cart.find((ts) => ts._id === pd._id);
    if (exists) {
      swal({
        title: "Not Added",
        text: "Product already in the cart",
        icon: "warning",
        buttons: true,
        dangerMode: true
      });
    } else {
      swal("Good job!", "Product added successfully!", "success");
      setCart([...cart, pd]);
    }
  };
  // remove from cart
  const removeFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row g-4">
              {product.map((pd) => (
                <Product key={pd._id} pd={pd} handleCart={handleCart} />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

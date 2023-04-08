import React from "react";

const Product = ({ pd, handleCart }) => {
  const { name, picture, price } = pd;
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <img
            src={picture}
            className="card-img-top object-fit-cover"
            alt="tshirts"
            style={{ height: "16rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: ${price}</p>
            <button
              onClick={() => handleCart(pd)}
              className="btn btn-outline-dark w-100"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

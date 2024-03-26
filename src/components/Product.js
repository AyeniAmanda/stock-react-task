import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Product = ({ datas }) => {
  return (
    <div className="products-container">
      {datas.map((product) => (
        <article className="product" key={product.id}>
          <div className="product__details">
            <p className="product__name">Name: {product.name}</p>
            <p className="product__price">Price: $ {product.amount}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

Product.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Product;

import React, { useEffect, useState } from 'react';
import productService from '../services/productService';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h2>Our Ceramic Products</h2>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
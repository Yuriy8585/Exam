import React, { useState, useCallback } from 'react';

function ProductCard({ product }) {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = useCallback(() => {
    setCartItems([...cartItems, product]);
  }, [cartItems, product]);

  return (
    <div>
      <h1>{product.id}</h1>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
}

export default ProductCard;
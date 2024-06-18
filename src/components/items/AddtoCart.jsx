import React, { useState } from 'react';

function Product() {
  const [cart, setCart] = useState({});

  const addToCart = (itemId, quantity) => {
    setCart({
      ...cart,
      [itemId]: (cart[itemId] || 0) + quantity
    });
  };

  return (
    <div>
      <button onClick={() => addToCart(1, 1)}>Add to cart</button>
    </div>
  );
}

export default Product;

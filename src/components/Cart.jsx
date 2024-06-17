import { useState, useEffect } from 'react';


function Cart() {
  const [cartItems, setCartItems] = useState([]);

  async function fetchProducts() {
    const response = await fetch('https://example.com/api/products');
    const products = await response.json();
    return products;
  }

  function AddToCart(item) {
    setCartItems([...cartItems, item]);
    
  }
  

  useEffect(() => {
    fetchProducts().then(products => {
      const cartItems = products.filter(product => product.inCart);
      setCartItems(cartItems);
    });
  }, []);

  return (
    <div>
      <h1>Shop box</h1>
      <br></br>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}


export default Cart;
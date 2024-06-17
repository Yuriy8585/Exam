import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Товар 1', price: 100, quantity: 2 },
    { id: 2, name: 'Товар 2', price: 200, quantity: 1 },
    { id: 3, name: 'Товар 3', price: 300, quantity: 3 },
  ]);

  const [grandTotal, setGrandTotal] = useState(0);
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    calculateGrandTotal();
  };

  const calculateGrandTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setGrandTotal(total);
  };
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} x {item.quantity} =
            {item.price * item.quantity}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <p>GRAND TOTAL: ${grandTotal}</p>
    </div>
  );
}

export default Cart;
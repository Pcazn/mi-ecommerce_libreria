// Cart.jsx
import React from 'react';
import { CartContainer, CartList, CartItem, Total } from './Cart.styles';

function Cart({ cart, removeFromCart }) {
  // ⚠️ Verificación 1: que sea un array
  if (!Array.isArray(cart)) {
    return <p style={{ color: 'black', textAlign: 'center' }}>⚠️ Error: El carrito no es válido.</p>;
  }

  // ⚠️ Verificación 2: que no esté vacío
  if (cart.length === 0) {
    return <p style={{ textAlign: 'center' }}>🛒 El carrito está vacío.</p>;
  }

  // ⚠️ Verificación 3: que los productos tengan precio válido
  const hasInvalidItems = cart.some(
    (item) => isNaN(parseFloat(item.Precio)) || parseFloat(item.Precio) <= 0
  );

  if (hasInvalidItems) {
    return (
      <p style={{ color: 'black', textAlign: 'center' }}>
        ⚠️ Hay productos con datos inválidos (precio no válido).
      </p>
    );
  }

  const total = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1;
    const price = parseFloat(item.Precio);
    return sum + quantity * price;
  }, 0);

  return (
    <CartContainer>
      <h2>Carrito</h2>
      <CartList>
        {cart.map((item, index) => (
          <CartItem key={item.id || index}>
            {item.Nombre} x {item.quantity || 1} - ${' '}
            {(parseFloat(item.Precio) * (item.quantity || 1)).toLocaleString('es-AR')}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </CartItem>
        ))}
      </CartList>
      <Total>Total: ${total.toLocaleString('es-AR')}</Total>
    </CartContainer>
  );
}

export default Cart;



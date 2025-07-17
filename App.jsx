import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import Cart from "./Components/Cart.jsx";
import ProtectedRoute from "./Components/ProtectedRoute"; // <-- Ruta protegida
import "./App.css";

const products = [
  { id: 1, Nombre: "Producto A", Precio: 100 },
  { id: 2, Nombre: "Producto B", Precio: 200 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // simulación

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
        <main>
          <Routes>
            {/* Home: lista productos + botón agregar */}
            <Route
              path="/"
              element={<Home products={products} addToCart={addToCart} />}
            />

            {/* Ruta protegida */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Carrito */}
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} />}
            />
          </Routes>

          {/* Simular login/logout para pruebas */}
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
              {isAuthenticated ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

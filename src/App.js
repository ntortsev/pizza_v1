import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/pizza_v1" element={<Home items={pizzas} />} />
          <Route path="/pizza_v1/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

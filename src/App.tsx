import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './routes/Cart';
import ClientHome from './routes/ClientHome';
import Catalog from './routes/ClientHome/Catalog';
import ProductDetails from './routes/ClientHome/ProductDetails';
import { ContextCartCount } from './utils/context-cart';

function App() {

  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product-details/:productId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />

        </Route>
        <Route path="*" element={<Navigate to={"/"}/>} />

      </Routes>
    </BrowserRouter >
    </ContextCartCount.Provider>
  );
}

export default App

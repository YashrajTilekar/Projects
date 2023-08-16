import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './pages/layout';
import { Home } from './pages/home';
import { Item } from './pages/item';
import { BrowserRouter, Routes , Route } from 'react-router-dom'; 

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/item" element={<Item />} />
          </Routes>
      </BrowserRouter>
      
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



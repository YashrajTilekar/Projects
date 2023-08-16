import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar} from './pages/layout';
import { Employee } from './pages/Employee';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Asset } from './pages/Asset';

function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/Employee" element={<Employee />}/>
      <Route path = "/Asset" element={<Asset />}/>
      
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


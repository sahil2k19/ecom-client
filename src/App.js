
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductShowPage from './components/ProductShowPage';


const App = () => {
 
  return (
    <>
       <Router>
          <Routes>
            <Route path="/" element={<ProductShowPage />} />
          
          </Routes>
        </Router>
    </>
  );
};

export default App;
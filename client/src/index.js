import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Software from './routes/Software/Software';
import Support from './routes/Support/Support';
import Order from './routes/Order/Order';
import Main from './routes/Main/Main';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import './css/custom.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="software" element={<Software />} />
        <Route path="support" element={<Support />} />
        <Route path="order" element={<Order />} />
        <Route path="productdetails" element={<ProductDetails /> } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
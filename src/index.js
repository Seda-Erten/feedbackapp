import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Varsa stil dosyanızı buraya dahil edin
import App from './App';
import Main from './main'; // main.jsx dosyasını import edin

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

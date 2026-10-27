import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.scss';
import './styles/responsive.scss';
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
 
);

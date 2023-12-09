import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css'; // Or your main Tailwind CSS file
import { HelmetProvider, Helmet } from 'react-helmet-async';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Helmet>
        {/* Favicon */}
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" sizes="any" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" sizes="180x180" />
        {/* Android and other devices */}
        <link rel="icon" href="%PUBLIC_URL%/icons/icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="%PUBLIC_URL%/icons/icon-256x256.png" sizes="256x256" type="image/png" />
        <link rel="icon" href="%PUBLIC_URL%/icons/icon-384x384.png" sizes="384x384" type="image/png" />
        <link rel="icon" href="%PUBLIC_URL%/icons/icon-512x512.png" sizes="512x512" type="image/png" />
        {/* Microsoft Tiles */}
        <meta name="msapplication-square70x70logo" content="%PUBLIC_URL%/icons/smalltile.png" />
        <meta name="msapplication-square150x150logo" content="%PUBLIC_URL%/icons/mediumtile.png" />
        <meta name="msapplication-wide310x150logo" content="%PUBLIC_URL%/icons/widetile.png" />
        <meta name="msapplication-square310x310logo" content="%PUBLIC_URL%/icons/largetile.png" />
      </Helmet> 
    <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

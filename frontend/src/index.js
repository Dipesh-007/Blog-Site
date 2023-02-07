import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// const { createProxyMiddleware } = require('http-proxy-middleware');
// App.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'http://localhost:5000',
//     changeOrigin: true,
//   })
// )

ReactDOM.render(
 
  <React.StrictMode>
   
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

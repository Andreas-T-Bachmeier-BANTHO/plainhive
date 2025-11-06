import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import('./data/plainhiveWordmarkBase64.js')
  .then(({ default: wordmarkBase64 }) => {
    const favicon = document.querySelector("link[rel='icon']#app-favicon");
    if (favicon) {
      favicon.href = `data:image/png;base64,${wordmarkBase64}`;
    }
  })
  .catch((error) => {
    console.error('Failed to apply PlainHive favicon', error);
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

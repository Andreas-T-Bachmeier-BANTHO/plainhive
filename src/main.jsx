import React from 'react';
import ReactDOM from 'react-dom/client';
import BrowserRouter from './lib/BrowserRouter.jsx';
import App from './App.jsx';
import './index.css';

console.log('BOOT', import.meta.env.BASE_URL);
window.addEventListener('error', (event) => {
  console.error('GlobalError:', event.error || event.message);
});
window.addEventListener('unhandledrejection', (event) => {
  console.error('UnhandledRejection:', event.reason);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

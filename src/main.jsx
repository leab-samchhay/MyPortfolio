// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import GlobalContext from './contexts/GlobalContext.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <GlobalContext>
//       <App />
//     </GlobalContext>
//   </StrictMode>,
// )

// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './contexts/GlobalContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
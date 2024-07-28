import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your global styles
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals'; // Optional for measuring performance

// Create a root element and render the App component
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Optional: Measure performance (you can also remove this if not needed)
reportWebVitals();

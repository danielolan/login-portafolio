// Importar React y ReactDOM para renderizar tu aplicación
import React from 'react';
import ReactDOM from 'react-dom';

// Importar el archivo CSS principal que incluye TailwindCSS directives
import './index.css';

// Importar el componente principal de tu aplicación (App.jsx)
import App from './App';

// Este es el punto de entrada para tu aplicación React. Aquí, ReactDOM renderiza tu componente App dentro del elemento root de tu archivo HTML.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  
);

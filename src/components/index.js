import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assurez-vous que le chemin est correct par rapport à l'emplacement de votre fichier App.js
import './App.css';
import reportWebVitals from '../reportWebVitals';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();

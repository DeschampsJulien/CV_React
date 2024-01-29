import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

import reportWebVitals from './reportWebVitals';

// BOOTSTRAP EN NPM IMPORTATION DU STYLE
import 'bootstrap/dist/css/bootstrap.css';
// BOOTSTRAP EN NPM IMPORTATION DU SCRIPT
import 'bootstrap/js/index.esm';

// IMPORTATION DU MODULE DE ROUTAGE
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances de votre application, transmettez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyer à un point de terminaison d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();

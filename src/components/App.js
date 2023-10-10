import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; // Assurez-vous que le chemin est correct par rapport à votre fichier App.css
import Accueil from './Accueil';
import PhotoList from './PhotoList'; // Ajustez le chemin pour PhotoList si nécessaire
import PhotoUpload from './PhotoUpload'; // Ajustez le chemin pour PhotoUpload si nécessaire

function App() {
  const [photos] = useState([]); // Utilisez seulement photos car setPhotos n'est pas utilisé

  // Fonction pour gérer le téléchargement de photos (à implémenter)
  const handleUpload = () => {
    // Mettez ici la logique de téléchargement de photos
  };

  return (
    <div className="App">
      <h1>L'Instant</h1>
      <div className="photo-upload">
        {/* Formulaire de téléchargement de photos */}
        <input type="file" id="file-input" />
        <button id="upload-button" onClick={handleUpload}>
          Télécharger
        </button>
      </div>
      <div className="photo-list">
        {/* Liste des photos */}
        {photos.map((photo, index) => (
          <div className="photo" key={index}>
            <img src={photo} alt={`${index + 1}`} /> {/* Supprimer le mot "Photo" */}
          </div>
        ))}
        {/* Vous pouvez générer dynamiquement cette liste à partir de l'état 'photos' */}
      </div>
    </div>
  );
}

export default App;

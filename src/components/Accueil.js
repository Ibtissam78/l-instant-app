import React from 'react';
import './App.css'; // Assurez-vous d'importer les styles CSS

function Accueil() {
  return (
    <div className="Acceuil">
      <header className="Header">
        <div className="Logo">L'Instant</div>
        <nav className="Navbar">
          <ul className="NavLinks">
            <li>Accueil</li>
            <li>Photos</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="MainContent">
        <section className="HeroSection">
          <h1 className="HeroTitle">Bienvenue à L'Instant</h1>
          <p className="HeroDescription">
            Découvrez et partagez des moments inoubliables avec vos proches.
          </p>
          <button className="GetStartedButton">Commencer</button>
        </section>
        <section className="FeaturesSection">
          {/* Contenu de la section des fonctionnalités */}
        </section>
      </main>
      <footer className="Footer">
        <div className="FooterText">
          © 2023 L'Instant. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default Accueil;

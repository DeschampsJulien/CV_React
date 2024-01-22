import './App.css';

import Logo from "./logo.svg";
import Facebook from "./img/logos/facebook.png";
import Github from "./img/logos/github.png";
import Linkedin from "./img/logos/linkedin.png";

// Le fichier image.png doit être dans le même dossier que le fichier JS
// On importe l'image en utilisant son chemin
// import Backgroung from './img/digital.jpg'; 


// IMPORTATION DES MODULES POUR LE ROUTAGE
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from "./pages/Accueil";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";


export default function App() {
  
  return (
    <div className="App">
      
      <header className="App-header navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
        <div className="container-fluid">

          <a className="navbar-brand fs-4" href="#page-top"><p className="header-link">Julien Deschamps</p></a>
          
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/" className="nav-link py-3 px-0 px-lg-3 fs-5"><p className="header-link">Accueil</p></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/Services" className="nav-link py-3 px-0 px-lg-3 fs-5"><p className="header-link">Services</p></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/Realisations" className="nav-link py-3 px-0 px-lg-3 fs-5"><p className="header-link">Réalisations</p></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/Blog" className="nav-link py-3 px-0 px-lg-3 fs-5"><p className="header-link">Blog</p></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/Contact" className="nav-link py-3 px-0 px-lg-3 fs-5"><p className="header-link">Contact</p></Link></li>
              </ul>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Realisations" element={<Realisations />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Mentions" element={<Mentions />}></Route>
      </Routes>  

      <footer className="App-footer pt-4">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6">
              <div className="p-4 m-2 text-left text-break border border-dark rounded">
                <address>
                  <p className="fs-4 text-uppercase">Julien Deschamps</p>
                  <p className="fs-6"><a href="https://www.google.com/search?q=62+boulevard+victor+hugo+frontignan&rlz=1C1GCEA_enFR1058FR1058&oq=62+boulevard+victor+hugo+34110fron&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIJCAMQIRgKGKABMgkIBBAhGAoYoAHSAQkxNjQ5OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">62 Boulevard Victor Hugo 34110 Frontignan</a></p>
                  <p className="fs-6"><a href="mailto:jdeschamps34@yahoo.fr">jdeschamps34@yahoo.fr</a></p>
                  <p className="fs-6"><a href="tel:0625047486">0625047486</a></p>
                  <div>
                    <a className="btn btn-xl m-2 btn-outline-light" href="https://www.linkedin.com/in/julien-deschamps-a670a567" target="_blank" rel="noopener noreferrer">
                      <img src={Linkedin} className="App-link" alt="Linkedin"/>
                    </a>
                    <a className="btn btn-xl m-2 btn-outline-light" href="https://www.facebook.com/julien.deschamps.1675" target="_blank" rel="noopener noreferrer">
                      <img src={Facebook} className="App-link" alt="Facebook"/>
                    </a>
                    <a className="btn btn-xl m-2 btn-outline-light" href="https://www.github.com/DeschampsJulien" target="_blank" rel="noopener noreferrer">
                      <img src={Github} className="App-link" alt="Github"/>
                    </a>
                  </div>
                </address>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="p-4 m-2  text-left text-break border border-dark rounded">
                <p className="fs-4 text-uppercase">Liens Utiles</p>
                <ul className="navbar-nav ms-auto">  
                  <li className="nav-item m-1 mx-lg-1"><Link to="/" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Accueil</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Services" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Services</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Contact" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Contact</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Mentions" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Mentions légales</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="p-4 m-2 text-left text-break border border-dark rounded">
                <p className="fs-4 text-uppercase">Mes Réalisations</p>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Realisations" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Apprendre en ligne</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Realisations" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Projet PortFolio</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Realisations" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Tutoriel HTML/CSS</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="p-4 m-2 text-left text-break border border-dark rounded">
                <p className="fs-4 text-uppercase">Mes Articles</p>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Coder sont site en HTML et CSS</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Vendre un produit sur le Web</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Se positionner sur Google</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Coder en responsive design</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Techniques de référencement</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true"></i> Apprendre à coder</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col mt-4">
          <div className="p-3 bg-dark text-center">
            <p className="fs-3">Copyright 2024</p>
            <img src={Logo} className="App-logo" alt="logo" />
          </div>
        </div>

      </footer>
    </div>
  );
}



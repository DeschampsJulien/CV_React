import './App.css';
import Logo from "./logo.svg";

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
      
      <header className="bg-dark navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="#page-top">
            <Link to="/" className="nav-link text-start py-1 py-lg-1 px-0 px-lg-1 fs-5 list-group-item list-group-item-action"><p className="App-header-logo" tabindex="0"><img src={Logo} className="App-logo" alt="logo" />Julien Deschamps</p></Link>
          </a>
          
          <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="hamburger fa-solid fa-bars fa-2x" aria-hidden="true"></i> 
          </div>
  
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/" className="nav-link px-4 px-lg-3 fs-5"><p className="App-header-link" tabindex="0">Accueil</p></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/Services" className="nav-link px-4 px-lg-3 fs-5"><p className="App-header-link" tabindex="0">Services</p></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/Realisations" className="nav-link px-4 px-lg-3 fs-5"><p className="App-header-link" tabindex="0">Réalisations</p></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/Blog" className="nav-link px-4 px-lg-3 fs-5"><p className="App-header-link" tabindex="0">Blog</p></Link></li>
                  <li className="nav-item mx-0 mx-lg-1"><Link to="/Contact" className="nav-link px-4 px-lg-3 fs-5"><p className="App-header-link" tabindex="0">Contact</p></Link></li>
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

      <footer className="bg-light pt-4 mt-5">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6">
              <div className="p-4 p-lg-3 p-xl-4 m-2 text-left text-break border border-dark rounded">
                <address>
                  <h4 className="titre-color text-uppercase">Julien Deschamps</h4>
                  <p className="fs-6"><a className="text-color" href="https://www.google.com/search?q=62+boulevard+victor+hugo+frontignan&rlz=1C1GCEA_enFR1058FR1058&oq=62+boulevard+victor+hugo+34110fron&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIJCAMQIRgKGKABMgkIBBAhGAoYoAHSAQkxNjQ5OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">62 Boulevard Victor Hugo 34110 Frontignan</a></p>
                  <p className="fs-6"><a className="text-color" href="mailto:jdeschamps34@yahoo.fr">jdeschamps34@yahoo.fr</a></p>
                  <p className="fs-6"><a className="text-color" href="tel:0625047486">0625047486</a></p>
                  <div>
                    <a className="m-2" href="https://www.linkedin.com/in/julien-deschamps-a670a567" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-linkedin fa-2x"></i>
                    </a>

                    <a className="m-2" href="https://www.facebook.com/julien.deschamps.1675" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-facebook fa-2x"></i>
                    </a>

                    <a className="m-2 " href="https://www.github.com/DeschampsJulien" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github fa-2x text-dark"></i>
                    </a>
                  </div>
                </address>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="p-4 p-lg-3 p-xl-4 m-2  text-left text-break border border-dark rounded">
                <h4 className="titre-color text-uppercase">Liens Utiles</h4>
                <ul className="navbar-nav ms-auto">  
                  <li className="nav-item m-1 mx-lg-1"><Link to="/" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Accueil</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Services" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Services</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Contact" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Contact</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Mentions" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Mentions légales</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="p-4 p-lg-3 p-xl-4 m-2 text-left text-break border border-dark rounded">
                <h4 className="titre-color fs-4 text-uppercase">Mes Réalisations</h4>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Realisations" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Apprendre en ligne</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Realisations" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Projet PortFolio</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Realisations" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Tutoriel HTML/CSS</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="p-4 p-lg-3 p-xl-4 m-2 text-left text-break border border-dark rounded">
                <h4 className="titre-color fs-4 text-uppercase">Mes Articles</h4>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Coder sont site en HTML et CSS</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Vendre un produit sur le Web</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Se positionner sur Google</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Coder en responsive design</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Techniques de référencement</Link></li>
                  <li className="nav-item m-1 mx-lg-1"><Link to="/Blog" className="App-footer-link fs-6 m-1"><i className="fa fa-chevron-right" aria-hidden="true" tabindex="0"></i> Apprendre à coder</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col mt-4">
          <div className="bg-dark text-center p-3">
            <p className="text-light fs-3">Copyright 2024</p>
          </div>
        </div>

      </footer>
    </div>
  );
}



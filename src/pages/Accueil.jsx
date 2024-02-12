import TextClock from "../components/TextClock";
import ProfilGitHub from "../components/ProfilGitHub";

import PhotoDev from "../img/photo_julien_deschamps.jpg";
import Curriculum from "../documents/curriculum.pdf";


export default function Accueil() {

    return (
        <main id="top-page">

            <section className="background-header mx-auto">
                <div className="filtre-header">

                        {/* IMPORTATION DU COMPONENT "TextClock" */}
                        <TextClock /> 
                        
                        <h1	className="text-uppercase text-center text-break mb-3 fs-1"><strong>Julien Deschamps</strong></h1>
                        <h2 className="text-uppercase text-center text-break mb-4 fs-2">Développeur web fullstack</h2>
                        <a className="btn btn-primary btn-lg" href="#apropos">En savoir plus</a>
                </div>
            </section>
            
            <section id="apropos" className="text-center py-5 px-1 mt-4">
                <div className="container">
                    
                    <h2 className="text-uppercase"><strong>À propos</strong></h2>
                    <hr/>

                    <div className="row">
                        <article className="col-md-6">
                            <div className="p-4 m-2 bg-light text-center text-break border rounded">
                                <h3 className="titre-color m-3">Mon histoire</h3>
                                <p className="text-color fs-5">
                                A la recherche, depuis quelques temps, d'une nouvelle activité professionnelle, les métiers du Web ont suscité ma curiosité.
                                Ainsi, poussé par cette envie d'en savoir plus sur cette technologie si présente dans notre quotidien, me voilà parti pour trouver des réponses.  
                                De nombreux langages informatiques, jargon technique et outils de développement entourent ce métier, il n'est pas si facile de s'y retrouver !  
                                Une découverte dans un cadre professionnel me semble essentiel avant toute chose.
                                La chance, une opportunité, un codeur passionné par le développement Web m'a initié au premier langage, semaine après semaine je me suis pris aux
                                jeux de la création! Pour aujourd'hui vous présenter mon Portfolio.     
                                </p>
                                
                                <hr />

                                <h3 className="titre-color m-4">Mes compétances</h3>
                                
                                <div className="progress"> 
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="text-color text-start fs-5">HTML 90%</p>
                                
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" style={{width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="text-color text-start fs-5">CSS 80%</p>
                                
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="text-color text-start fs-5">JavaSript 40%</p>
                                
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="text-colro text-start fs-5">Vue.js 50%</p>

                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="text-color text-start fs-5">React 40%</p>
                            </div>  
                        </article>

                        {/* SUPRESSION DE LA BALISE "HR" DE MD A XXL */}
                        {/* <hr className="d-md-none d-lg-none d-xl-none d-xxl-none"/> */}
  
                        <article className="col-md-6">

                            <div className="card p-4 m-2 bg-light text-center text-break border rounded">

                                {/* IMPORTATION DE LA PHOTO */}
                                <img src={PhotoDev} alt="Julien Deschamps" className="rounded"/>

                                <hr />

                                <h3 className="titre-color m-3">Motivations</h3>
                                <p className="text-color fs-5">	
                                Identifier, prioriser et trouver des solutions afin de répondre aux attentes,  
                                accroître le niveau de satisfaction et pérenniser, telles sont les valeurs 
                                primordiales auxquelles je m'attache. De plus, une politique managériale basée sur
                                le développement des compétences et l'implication pour le travail en équipe,
                                est pour moi un objectif et une nécessité au seins d'un groupe.
                                </p>
                               
                            </div> 
                        </article>
                    </div>

                    {/* LIEN VERS UN FICHIER PDF */}
                    <a className="btn btn-primary btn-lg btn-outline-light m-5" href={Curriculum} target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-download"></i> Téléchargez mon CV
                    </a>
                    <hr />
                </div>
            </section>
            {/* IMPORTATION DU COMPONENT "ProfilGitHub" */}
            <ProfilGitHub />
            <a className="btn btn-primary btn-lg rounded-circle float-end mx-4 mt-4" href="#top-page"><i className="fa-solid fa-arrow-up"></i></a>
        </main>
    );
}

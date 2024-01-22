import TextClock from "../components/TextClock";
import "./Accueil.css";



export default function Accueil() {
    return (
        <main>
            <section className="section-header">

                <TextClock /> 
                
                <h1	className="titre text-uppercase mb-3 display-1">Julien Deschamps</h1>
                <h2 className="sous-titre text-uppercase mb-4 display-4">Développeur web fullstack</h2>
                <a className="btn btn-primary btn-lg" href="#apropos">En savoir plus</a>
                
            </section>
        
            <section id="apropos" className="text-center py-5 px-4 mt-4">
                <div className="container">
                    <h2 className="text-uppercase">À propos</h2>
                    <hr/>

                    <div className="row">
                        <article className="col-md-6">
                            <div className="p-4 m-2 bg-light text-center text-break border rounded">
                                <h3>Mon histoire</h3>
                                <p className="fs-5">
                                A la recherche, depuis quelques temps, d'une nouvelle activité professionnelle, les métiers du Web ont suscité ma curiosité.
                                Ainsi, poussé par cette envie d'en savoir plus sur cette technologie si présente dans notre quotidien, me voilà parti pour trouver des réponses.  
                                De nombreux langages informatiques, jargon technique et outils de développement entourent ce métier, il n'est pas si facile de s'y retrouver !  
                                Une découverte dans un cadre professionnel me semble essentiel avant toute chose.
                                La chance, une opportunité, un codeur passionné par le développement Web m'a initié au premier langage, semaine après semaine je me suis pris aux
                                jeux de la création! Pour aujourd'hui vous présenter mon Portfolio.     
                                </p>
                            </div>  
                        </article>

                        {/* SUPRESSION DE LA BALISE "HR" DE MD A XXL */}
                        {/* <hr className="d-md-none d-lg-none d-xl-none d-xxl-none"/> */}
                        
                        <article className="col-md-6">
                        <div className="p-4 m-2 bg-light text-center text-break border rounded">
                                <h3>Mes valeurs</h3>
                                <p className="fs-5">	
                                Identifier, prioriser et trouver des solutions afin de répondre aux attentes,  
                                accroître le niveau de satisfaction et pérenniser, telles sont les valeurs 
                                primordiales auxquelles je m'attache. De plus, une politique managériale basée sur
                                le développement des compétences et l'implication pour le travail en équipe,
                                est pour moi un objectif et une nécessité au seins d'un groupe.
                                </p>
                            </div> 
                        </article>
                    </div>
                    <a className="btn btn-xl btn-outline-light" href="../">
                        <i className="fa-solid fa-download"></i> Téléchargez mon CV
                    </a>
                </div>
            </section>
        </main>

    );
}

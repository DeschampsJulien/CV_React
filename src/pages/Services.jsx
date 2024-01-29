export default function Services() {
    return (
        
        <main>

            <section className="pages-header"></section>

            <div className="container text-center p-3">

                <h2 className="text-uppercase mt-5"><strong>Mon offre de services</strong></h2>
                <p className="text-color text-uppercase mb-5 fs-6" >Voici les prestations sur lesquelles je peux intervenir.</p>
                <hr />

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    <div className="icon-color col-lg-4 col-md-6">
                        <div className="p-4 m-2 bg-light text-center text-break border rounded">
                            <i class="fa-solid fa-computer fa-3x m-3"></i>
                            <h3 className="titre-color text-uppercase">UX design</h3>
                            <p className="text-color">
                                L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. 
                                Son but est d'offri une expérience de navigation optimale à l'internaute.
                            </p>
                        </div>
                    </div>

                    <div className="icon-color col-lg-4 col-md-6">
                        <div className="p-4 m-2 bg-light text-center text-break border rounded">
                        <i class="fa-regular fa-file-code fa-3x m-3"></i>
                            <h3 className="titre-color text-uppercase">Développement Web</h3>
                            <p className="text-color">
                                Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <code>HTML</code>, <code>CSS</code>, JavaScript et <code>PHP</code>.
                            </p>
                        </div>
                    </div>

                    <div className="icon-color col-lg-4 col-md-6">
                        <div className="p-4 m-2 bg-light text-center text-break border rounded">
                            <i class="fa-solid fa-magnifying-glass fa-3x m-3"></i>
                            <h3 className="titre-color text-uppercase">Référencement</h3>
                            <p className="text-color">
                                Le <strong>référencement naturel d'un site,</strong> aussi appelé <code>SEO</code> consiste à mettre des techniques en oeuvre pour amélirer sa position dans les résultats des moteurs de recherche.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

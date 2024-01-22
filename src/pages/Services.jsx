export default function Services() {
    return (
        <main className="text-center py-5 px-2 mt-4">

            <h2 className="text-uppercase mt-5"><strong>Mon offre de services</strong></h2>
            <p className="text-uppercase mb-5 fs-6" >Voici les prestations sur lesquelles je peux intervenir.</p>
            <hr />

            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6">
                        <div className="p-4 m-2 bg-light text-center text-break border rounded">
                            <i className="fa fa-desktop fa-2x m-3 text-primary" aria-hidden="true"></i>
                            <p className="fs-5 text-uppercase">UX design</p>
                            <p>
                                L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. 
                                Son but est d'offri une expérience de navigation optimale à l'internaute.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="p-4 m-2 bg-light text-center text-break border rounded">
                        <i class="fa fa-file-code fa-2x m-3 text-primary" aria-hidden="true"></i>
                            <p className="fs-4 text-uppercase">Développement Web</p>
                            <p>
                                Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <u>HTML</u>, <u>CSS</u>, JavaScript et <u>PHP</u>.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="p-4 m-2 bg-light text-center text-break border rounded">
                            <i class="fa fa-search fa-2x m-3 text-primary" aria-hidden="true"></i>
                            <p className="fs-4 text-uppercase">Référencement</p>
                            <p>
                                Le <strong>référencement naturel d'un site,</strong> aussi appelé <u>SEO</u> consiste à mettre des techniques en oeuvre pour amélirer sa position dans les résultats des moteurs de recherche.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

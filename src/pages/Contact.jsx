import Formulaire from "../components/Formulaire";

export default function Contact() {
    return (

        <main>

            <div className="background-main">
                <div className="filtre-main">
                    <div className="m-4">

                        <div className="container text-center bg-white rounded">

                            <h2 className="titre-color text-uppercase pt-5"><strong>Contact</strong></h2>
                            <p className="text-color text-uppercase mb-5 p-2">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                            <hr className="text-dark"/>

                            <div className="row row-cols-1 row-cols-md-3 p-2">

                                {/* IMPORTATION DU COMPONENT "Formulaire"  */}
                                <Formulaire />
                                    
                                <article className="col-md-6">
                                    <h3 className="titre-color">Mes coordonnées</h3>
                                    <hr />
                                    <address>
                                        <p className="text-color "><i className="fas fa-map-marker m-1"></i>62 Boulevard Victor Hugo 34110 Frontignan</p>
                                        <p className="text-color"><i className="fas fa-mobile-alt m-1"></i>06 25 04 74 86</p>
                                        <p className="text-color"><i className="far fa-envelope m-1"></i>jdeschamps34@yahoo.fr</p>
                                        
                                    </address>
                                    <iframe className="rounded"
                                        id="inlineFrameExample"
                                        title="Inline Frame Example"
                                        width="300"
                                        height="236"
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                                    </iframe>
                                </article>
                            </div>
                        </div>
                    </div> 
                </div>   
            </div>
        </main>
    );
}

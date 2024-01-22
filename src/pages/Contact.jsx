export default function Contact() {
    return (

        <main className="text-center py-5 px-4 mt-4">

			<h2 className="text-uppercase mt-5"><strong>Contact</strong></h2>
			<p className="text-uppercase mb-5">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
			<hr />

            <div className="container">
                <div className="row">
                    <form className="col-md-6">
                        <h3>Formulaire de contact</h3>
                        <hr /> 
                        <div class="form-group">
                            <input type="Nom" className="form-control my-3" placeholder="Votre nom"/>
                            <input type="email" className="form-control my-3"  placeholder="Votre adresse email "/>
                            <input type="Numéro" className="form-control my-3" placeholder="Votre numéro de téléphone"/>
                            <input type="Sujet" className="form-control my-3" placeholder="Sujet"/>
                            <textarea className="form-control my-3" placeholder="Votre message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg my-3">Envoyer</button>
                    </form>

                    <article className="col-md-6">
                        <h3>Mes coordonnées</h3>
                        <hr />
                        <address>
                            <i className="fas fa-map-marker"></i> 62 Boulevard Victor Hugo 34110 Frontignan<br/>
                            <i className="fas fa-mobile-alt"></i> 06 25 04 74 86<br/>
                            <i className="far fa-envelope"></i> jdeschamps34@yahoo.fr
                        </address>
                        <iframe className="rounded"
                            id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="300"
                            height="236"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                        {/* https://www.openstreetmap.org/search?query=62%20boulevard%20victor%20hugo%2034110%20frontignan#map=18/43.44522/3.75502 */}
                        </iframe>
				    </article>
                </div>
            </div>
        </main>
    );
}

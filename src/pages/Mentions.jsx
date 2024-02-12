export default function Mentions() {
    return (
        <main id="top-page">

            <section className="pages-header"></section>

            <div className="container text-center p-3">

                <h2 className="text-uppercase mt-5"><strong>Mentions légales</strong></h2>
                <hr />
            
                <div className="accordion" id="accordionExample">

                    <div className="accordion-item">
                        <h3 className="titre-color accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Editeur du site
                            </button>
                        </h3>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <address className="text-start">
                                    <p className="text-color fs-5 text-uppercase">Julien Deschamps</p>
                                    <p className="fs-6"><a href="https://www.google.com/search?q=62+boulevard+victor+hugo+frontignan&rlz=1C1GCEA_enFR1058FR1058&oq=62+boulevard+victor+hugo+34110fron&gs_lcrp=EgZjaHJvbWUqCQgBECEYChigATIGCAAQRRg5MgkIARAhGAoYoAEyCQgCECEYChigATIJCAMQIRgKGKABMgkIBBAhGAoYoAHSAQkxNjQ5OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">62 Boulevard Victor Hugo 34110 Frontignan</a></p>
                                    <p className="fs-6"><a href="mailto:jdeschamps34@yahoo.fr">jdeschamps34@yahoo.fr</a></p>
                                    <p className="fs-6"><a href="tel:0625047486">0625047486</a></p>
                                </address>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="titre-color accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                        </h3>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-start">
                            <p className="text-color fs-5 text-uppercase">Always Data</p>
                            <p className="fs-6"><a href="https://www.google.com/search?q=91+rue+du+faubourg+saint-honor%C3%A9+75008+paris&sca_esv=601675174&rlz=1C1GCEA_enFR1058FR1058&sxsrf=ACQVn0_2rlrkyCEqWPTaGqzWnKyT83kCaw%3A1706257550404&ei=jmyzZd-gGOz5kdUPy_SfkAM&oq=91+rue+du+faubourg&gs_lp=Egxnd3Mtd2l6LXNlcnAiEjkxIHJ1ZSBkdSBmYXVib3VyZyoCCAAyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESIrgAVCsIVjOvQFwBHgAkAEAmAH2AaAByBmqAQYxLjcuMTC4AQHIAQD4AQGoAhTCAgcQIxjqAhgnwgINEC4YxwEY0QMY6gIYJ8ICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQHCAhYQLhgDGI8BGOUCGOoCGLQCGIwD2AEBwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgIIEC4YgAQYsQPCAgUQLhiABMICCBAAGIAEGLEDwgIgEC4YgAQYsQMYgwEYxwEY0QMYlwUY3AQY3gQY4ATYAQLCAgsQLhiDARixAxiABMICChAAGIAEGIoFGEPCAhoQLhiDARixAxiABBiXBRjcBBjeBBjgBNgBAsICCBAuGLEDGIAEwgIKEAAYgAQYFBiHAsICFxAuGLEDGIAEGJcFGNwEGN4EGOAE2AEC4gMEGAEgQYgGAboGBggBEAEYC7oGBggCEAEYFA&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">91 Rue du Faubourg Sanit-Honoré 75008 Paris</a></p>
                            <p className="fs-6"><a href="https://www.alwaysdata.com/fr" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-globe"></i> www.alwaysdata.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h3 className="titre-color accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                        </h3>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body text-start">
                                <p className="text-color fs-5 text-uppercase">Crédits</p>
                                <p className="text-color fs-6">Site développé par Julien Deschamps, étudiant du CEF</p>
                                <p className="text-color fs-6">Les images libres de droit sont issues du site<a href="https://pixabay.com/fr" target="_blank" rel="noopener noreferrer"> Pixabay</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-primary btn-lg rounded-circle float-end mx-4 mt-4" href="#top-page"><i className="fa-solid fa-arrow-up"></i></a>
        </main>
    );
}

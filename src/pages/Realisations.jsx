import Projet1 from "../img/portfolio/apprentissage-en-ligne.png"
import Projet2 from "../img/portfolio/effets-visuels.png"
import Projet3 from "../img/portfolio/linformatique.png"

export default function Realisation() {
    return (
        <main id="top-page">

			<section className="pages-header"></section>

			<div className="container text-center p-3">

				<h2 className="text-uppercase mt-5"><strong>Portfolio</strong></h2>
				<p className="text-color text-uppercase mb-5">A la découverte de mes réalisations</p>
				<hr />

				<div className="row row-cols-1 row-cols-md-3 g-4">

					<div className="col-lg-4 col-md-6">
						<div className="card h-100">
							<img src={Projet1} alt="Apprentissage en ligne"/>
							<div className="card-body">
								<h3 className="titre-color card-title">Apprentissage en ligne</h3>
								<p className="text-color card-text font-weight-bold">Réalisation d'une formation diplomante développement Web et Web-mobile fullstack.</p>
								<button type="button" className="btn btn-outline-primary btn-lg">Découvrir</button>
							</div>
							<div className="card-footer">
								<small class="text-muted">Réalisation au Centre Européen de Formation</small>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="card h-100">
							<img src={Projet2} alt="Projet PortFolio"/>
							<div className="card-body">
								<h3 className="titre-color card-title">Projet PortFolio</h3>
								<p className="text-color card-text">Développement avec outils de codage et mise en application des bonnes pratiques de normalisation.</p>
								<button type="button" className="btn btn-outline-primary btn-lg">Découvrir</button>
							</div>
							<div className="card-footer">
								<small className="text-muted">Réalisation Vue.js</small>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="card h-100">
							<img src={Projet3} alt="Tutoriel HTML/CSS"/>
							<div className="card-body">
								<h3 className="titre-color card-title">Tutoriel HTML/CSS</h3>
								<p className="text-color card-text">Réalisation d'un tutoriel de balise HTML et style CSS.</p>
								<button type="button" className="btn btn-outline-primary btn-lg">Découvrir</button>
							</div>
							<div className="card-footer">
								<small class="text-muted">Réalisation HTML/CSS</small>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a className="btn btn-primary btn-lg rounded-circle float-end mx-4 mt-4" href="#top-page"><i className="fa-solid fa-arrow-up"></i></a>
		</main>
    );
}

import Projet1 from "../img/portfolio/apprentissage-en-ligne.png"
import Projet2 from "../img/portfolio/effets-visuels.png"
import Projet3 from "../img/portfolio/linformatique.png"

export default function Realisation() {
    return (
        <main className="text-center py-5 px-4 mt-4">

			<h2 className="text-uppercase mt-5"><strong>Portfolio</strong></h2>
			<p className="text-uppercase mb-5">A la découverte de mes réalisations</p>
			<hr />

			<div className="row row-cols-1 row-cols-md-3 g-4">

				<div className="col-lg-4 col-md-6">
					<div className="card h-100">
						<img src={Projet1} alt="Apprentissage en ligne"/>
						<div className="card-body">
							<h3 className="card-title"><strong>Apprentissage en ligne</strong></h3>
							<p className="card-text font-weight-bold">Réalisation d'une formation diplomante développement Web et Web-mobile fullstack.</p>
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
							<h3 className="card-title"><strong>Projet PortFolio</strong></h3>
							<p className="card-text">Développement avec outils de codage et mise en application des bonnes pratiques de normalisation.</p>
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
							<h3 className="card-title"><strong>Tutoriel HTML/CSS</strong></h3>
							<p className="card-text">Réalisation d'un tutoriel de balise HTML et style CSS.</p>
							<button type="button" className="btn btn-outline-primary btn-lg">Découvrir</button>
						</div>
						<div className="card-footer">
							<small class="text-muted">Réalisation HTML/CSS</small>
						</div>
					</div>
				</div>
			</div>

		</main>

    );
}

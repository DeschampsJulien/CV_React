import HtmlCss from "../img/blog/html_css.jpg"
import Vendre from "../img/blog/vendre_produits.jpg"
import Position from "../img/blog/Position_google.jpg"
import Responsive from "../img/blog/Responsive.jpg"
import Seo from "../img/blog/seo.jpg"
import Apprendre from "../img/blog/apprendre.png"


export default function Blog() {
    return (
        <main className="text-center py-5 px-4 mt-4">

			<h2 className="text-uppercase mt-5"><strong>Blog</strong></h2>
			<p className="text-uppercase mb-5">Découvrer des sujets essentiels sur l'univers du développement Web</p>
			<hr />

			<div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-lg-4 col-md-6">
					<div class="card h-100">
						<img src={HtmlCss} alt="Coder sont site en HTML et CSS" className="rounded-top"/>
						<div class="card-body">
							<h3 class="card-title"><strong>Coder sont site en HTML et CSS</strong></h3>
							<p class="card-text">Tous les jours, tu surfes sur le net, mais sais-tu comment tout cela fonctionne ? Si tu as déjà vu du code informatique, tu t’ai sûrement dit que ça semblait bien compliqué ! Et pourtant,</p>
						</div>
						<a class="btn btn-primary" href="https://www.webcup.fr/boutique/je-cree-mon-premier-site-web-avec-html-css-ou-wordpress" role="button">Lire la suite</a>
						<div class="card-footer">
							<small class="text-muted">Dernière mise à jour il y a 3 minutes</small>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="card h-100">
					    <img src={Vendre} alt="Vendre un produit sur le WEB" className="rounded-top"/>
                        <div class="card-body">
                            <h3 class="card-title"><strong>Vendre un produit sur le WEB</strong></h3>
                            <p class="card-text">Avec l’explosion d’internet et des réseaux sociaux, il n’a jamais été aussi simple de vendre ses produits. Du moins, c’est l’impression que nous avons en parcourant les milliers de pages de vente de produits de tous les genres.</p>
                        </div>
						<a class="btn btn-primary" href="https://lasagadesaudacieux.com/vente-de-produits/" role="button">Lire la suite</a>
					
                        
                        <div class="card-footer">
                            <small class="text-muted">Dernière mise à jour il y a 3 minutes</small>
                        </div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="card h-100">
                        <img src={Position} alt="Se positionner sur Google" className="rounded-top"/>
                        <div class="card-body">
                            <h3 class="card-title"><strong>Se positionner sur Google</strong></h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        {/* https://falia.co/ressources/comment-etre-en-premiere-position-google/ */}
                        <div class="card-footer">
                            <small class="text-muted">Dernière mise à jour il y a 3 minutes</small>
                        </div>
					</div>
				</div>
                <div class="col-lg-4 col-md-6">
					<div class="card h-100">
						<img src={Responsive} alt="Coder en responsive design" className="rounded-top"/>
						<div class="card-body">
							<h3 class="card-title"><strong>Coder en responsive design</strong></h3>
							<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						</div>
                        {/* https://negliadesign.com/web/top-three-benefits-of-responsive-website-design/ */}
						<div class="card-footer">
							<small class="text-muted">Dernière mise à jour il y a 3 minutes</small>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="card h-100">
					    <img src={Seo} alt="Techniques de référencement" className="rounded-top"/>
                        <div class="card-body">
                            <h3 class="card-title"><strong>Techniques de référencement</strong></h3>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        {/* https://www.noiise.com/guide/seo/ */}
                        <div class="card-footer">
                            <small class="text-muted">Dernière mise à jour il y a 3 minutes</small>
                        </div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="card h-100">
                        <img src={Apprendre} alt="Apprendre à coder" className="rounded-top"/>
                        <div class="card-body">
                            <h3 class="card-title"><strong>Apprendre à coder</strong></h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        {/* https://www.centre-europeen-formation.fr/ */}
                        <div class="card-footer">
                            <small class="text-muted">Dernière mise à jour il y a 3 minutes</small>
                        </div>
					</div>
				</div>
			</div>

		</main>

    );
}

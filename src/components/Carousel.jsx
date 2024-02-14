import Carousel1 from "../img/carousel/istockphoto-1134477188-612x612.jpg"
import Carousel2 from "../img/carousel/istockphoto-1347528885-612x612.jpg"
import Carousel3 from "../img/carousel/istockphoto-1348475614-612x612.jpg"

export default function Carousel() {
    
  
    return (
        
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Carousel1} className="d-block w-100 rounded" alt="Carousel Frontignan"/>
          </div>
          <div className="carousel-item">
            <img src={Carousel2} className="d-block w-100 rounded" alt="Carousel Frontignan"/>
          </div>
          <div className="carousel-item">
            <img src={Carousel3} className="d-block w-100 rounded" alt="Carousel Frontignan"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    );
  }




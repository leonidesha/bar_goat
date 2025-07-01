import imagen1 from "../assets/img/carousel1.jpg";
import imagen2 from "../assets/img/carousel2.jpg";
import imagen3 from "../assets/img/carousel3.jpg";

function Carousel() {
  return (
    <>
      <div id="carouselExample" className="carousel slide" ref={carouselRef}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen1} className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={imagen2} className="d-block w-100" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={imagen3} className="d-block w-100" alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;

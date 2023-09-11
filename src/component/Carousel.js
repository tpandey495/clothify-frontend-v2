import jessica from "assets/images/jessica.png";
import carouselline from "assets/images/linecarousel.png";
import carouselrectangle from "assets/images/carouselreactangle.png";

import "styles/carousel.css";
const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-item">
        <div className="carousel-left-item">
          <p>Fresh</p>
          <p>2022</p>
          <p>Look</p>
          <img
            className="carousel-line"
            src={carouselline}
            alt="carousel-line"
          />
        </div>
        <div>
          {/* <div className="carousel-rectangle">
            <img src={carouselrectangle} alt="carousel-rectangle" />
          </div> */}
          <div className="jessica">
            <img className="jessica-img" src={jessica} alt="jessica-pic" />
          </div>
          <p>OREGON JACKET</p>
          <p>$124</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

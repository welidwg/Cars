import OwlCarousel from "react-owl-carousel";

export default function CarCard(props) {
  return (
    <>
      <div class="col-lg-4 col-md-4">
        <div class="car__item"></div>
        <OwlCarousel
          class="car__item__pic__slider owl-carousel owl-theme "
          loop
          auto
          margin={10}
          items={1}
          nav={false}
          dots={false}
        >
          <div className="item">
            {" "}
            <img src="img/cars/car-3.jpg" alt="" />
          </div>
          <div className="item">
            {" "}
            <img src="img/cars/car-8.jpg" alt="" />
          </div>
          <div className="item">
            {" "}
            <img src="img/cars/car-6.jpg" alt="" />
          </div>
          <div className="item">
            <img src="img/cars/car-3.jpg" alt="" />
          </div>
        </OwlCarousel>
        <div class="car__item__text">
          <div class="car__item__text__inner">
            <div class="label-date ">2018</div>
            <h5>
              <a href="#">Audi q8 2020</a>
            </h5>
            <ul>
              <li>
                <span>35,000</span> mi
              </li>
              <li>Auto</li>
              <li>
                <span>700</span> hp
              </li>
            </ul>
          </div>
          <div class=" d-flex justify-content-between align-items-center">
            <span class="car-option bg-primary">$319</span>
            <a className="btn text-dark ">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

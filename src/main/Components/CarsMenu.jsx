import OwlCarousel from "react-owl-carousel";
import CarCard from "./CarCard";
export default function CarsMenu(props) {
  return (
    <>
      <section class="car spad bg-light rounded m-4 mb-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="car__sidebar">
                <div class="car__search">
                  <h5>Car Search</h5>
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <div class="car__filter">
                  <h5>Car Filter</h5>
                  <form action="#">
                    <select>
                      <option data-display="Brand">Select Brand</option>
                      <option value="">Acura</option>
                      <option value="">Audi</option>
                      <option value="">Bentley</option>
                      <option value="">BMW</option>
                      <option value="">Bugatti</option>
                    </select>
                    <select>
                      <option data-display="Model">Select Model</option>
                      <option value="">Q3</option>
                      <option value="">A4 </option>
                      <option value="">AVENTADOR</option>
                    </select>
                    <select>
                      <option value="">Body Style</option>
                      <option value="">Option 1</option>
                      <option value="">Option 2</option>
                    </select>
                    <select>
                      <option value="">Condition</option>
                      <option value="">First Hand</option>
                      <option value="">Second Hand</option>
                    </select>
                    <select>
                      <option value="">Transmisson</option>
                      <option value="">Bluetooth</option>
                      <option value="">WiFi</option>
                    </select>
                    <select>
                      <option value="">Mileage</option>
                      <option value="">27</option>
                      <option value="">20</option>
                      <option value="">15</option>
                      <option value="">10</option>
                    </select>
                    <select>
                      <option value="">Engine</option>
                      <option value="">BS3</option>
                      <option value="">BS4</option>
                      <option value="">BS5</option>
                      <option value="">BS6</option>
                    </select>
                    <select>
                      <option value="">Colors</option>
                      <option value="">Red</option>
                      <option value="">Blue</option>
                      <option value="">Black</option>
                      <option value="">Yellow</option>
                    </select>
                    <div class="filter-price">
                      <p>Price:</p>
                      <div class="price-range-wrap">
                        <div class="filter-price-range"></div>
                        <div class="range-slider">
                          <div class="price-input">
                            <input type="text" id="filterAmount" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="car__filter__btn">
                      <button type="submit" class="site-btn">
                        Reset FIlter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="car__filter__option">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="car__filter__option__item">
                      <h6>Show On Page</h6>
                      <select>
                        <option value="">9 Car</option>
                        <option value="">15 Car</option>
                        <option value="">20 Car</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="car__filter__option__item car__filter__option__item--right">
                      <h6>Sort By</h6>
                      <select>
                        <option value="">Price: Highest Fist</option>
                        <option value="">Price: Lowest Fist</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
              </div>
              <div class="pagination__option">
                <a href="#" class="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">
                  <span class="arrow_carrot-2right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

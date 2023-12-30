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
                  <h5>Recherche</h5>
                  <form action="#">
                    <input type="text" placeholder="..." />
                    <button type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </form>
                </div>
                <div class="car__filter">
                  <h5>Filtre</h5>
                  <form action="#">
                    <select className="form-select mb-3">
                      <option data-display="Brand">Marque</option>
                      <option value="">Acura</option>
                      <option value="">Audi</option>
                      <option value="">Bentley</option>
                      <option value="">BMW</option>
                      <option value="">Bugatti</option>
                    </select>
                    <select className="form-select mb-3">
                      <option data-display="Model">Modèle</option>
                      <option value="">Q3</option>
                      <option value="">A4 </option>
                      <option value="">AVENTADOR</option>
                    </select>

                    <select className="form-select mb-3">
                      <option value="">Kilométrages</option>
                      <option value="">27</option>
                      <option value="">20</option>
                      <option value="">15</option>
                      <option value="">10</option>
                    </select>
                    <select className="form-select mb-3">
                      <option value="">Engine</option>
                      <option value="Essence">Essence</option>
                      <option value="Diesel">Diesel</option>
                    </select>
                    <select className="form-select mb-3">
                      <option value="">Boite</option>
                      <option value="">Manuelle</option>
                      <option value="">Automatique</option>
                    </select>

                    <div class="car__filter__btn mt-2">
                      <button type="submit" class="site-btn">
                        Restorer le filtre
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
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

export default function CarDetails(props) {
  return (
    <>
      <div class="breadcrumb-option bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>Porsche Cayenne Turbo S 2019</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="car-details spad bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 :">
              <div class="car__details__pic">
                <div class="car__details__pic__large">
                  <img
                    class="car-big-img"
                    src="/img/cars/details/cd-1.jpg"
                    alt=""
                  />
                </div>
                <div className="row">
                  <div class="col-lg-6 col-md-6 ">
                    <div class="car__details__tab__info__item  ">
                      <h5 className=" text-light">Informations générales</h5>
                      <ul className="">
                        <li className=" text-light ">
                          <i class="fa fa-check"></i>{" "}
                          <span className="fw-bold  color-1">Marque : </span>
                          Mercedes-Benz
                        </li>
                        <li className=" text-light ">
                          <i class="fa fa-check"></i>
                          <span className="fw-bold color-1">Modèle :</span>
                          AMG
                        </li>
                        <li className=" text-light ">
                          <i class="fa fa-check"></i>
                          <span className="fw-bold color-1">Kilométrage :</span>
                          AMG
                        </li>
                        <li className=" text-light ">
                          <i class="fa fa-check"></i>
                          <span className="fw-bold color-1">Engine :</span>
                          AMG
                        </li>
                        <li className=" text-light ">
                          <i class="fa fa-check"></i>
                          <span className="fw-bold color-1">Boite :</span>
                          AMG
                        </li>
                        <li className=" text-light ">
                          <i class="fa fa-check"></i>
                          <span className="fw-bold color-1">Année :</span>
                          AMG
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 ">
                    <div class="car__details__tab__info__item  ">
                      <h5 className=" text-light">
                        Informations du propriétaire
                      </h5>
                      <ul className="">
                        <li className=" text-light ">
                          <i class="fa fa-check"></i>{" "}
                          <span className="fw-bold  color-1">Nom : &nbsp;</span>
                          Welid Wg
                        </li>
                        <li className=" text-light ">
                          <i class="fa fa-check"></i>
                          <span className="fw-bold color-1">Mobile :</span>
                          556678986
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="car__details__sidebar">
                <div class="car__details__sidebar__model">
                  <a href="#" class="primary-btn">
                    Get Today Is Price
                  </a>
                  <p>Pricing in 11/26/2019</p>
                </div>
                <div class="car__details__sidebar__payment">
                  <ul>
                    <li>
                      MSRP <span>$120,000</span>
                    </li>
                    <li>
                      Dealer Discounts <span>$3,000</span>
                    </li>
                    <li>
                      Price <span>$117,000</span>
                    </li>
                  </ul>
                  <a href="#" class="primary-btn">
                    <i class="fa fa-credit-card"></i> Express Purchase
                  </a>
                  <a href="#" class="primary-btn n">
                    <i class="fa fa-sliders"></i> Build Payment
                  </a>
                  <a href="#" class="primary-btn ">
                    <i class="fa fa-money"></i> Value Trade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

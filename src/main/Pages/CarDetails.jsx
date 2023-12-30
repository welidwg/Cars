import axios from "axios";
import { useParams } from "react-router";
import { URL, URL_IMG } from "../../constants";
import { useEffect, useState } from "react";

export default function CarDetails(props) {
  const [car, setCar] = useState(null);
  const params = useParams();
  useEffect(() => {
    const id = params.id;
    axios.get(`${URL}/cars/${id}`).then((res) => setCar(res.data));
  }, []);
  return car == null ? (
    <>Loading</>
  ) : (
    <>
      <div className="breadcrumb-option bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>
                  {car.brand} | {car.model}{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="car-details spad bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 :">
              <div className="car__details__pic">
                <div className="car__details__pic__large">
                  <img
                    className="car-big-img"
                    src={`${URL_IMG}/${car.photos[0]}`}
                    alt=""
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 ">
                    <div className="car__details__tab__info__item  ">
                      <h5 className=" text-light">Informations générales</h5>
                      <ul className="">
                        <li className=" text-light ">
                          <i className="fa fa-check"></i>{" "}
                          <span className="fw-bold  color-1">Marque : </span>
                          {car.brand}
                        </li>
                        <li className=" text-light ">
                          <i className="fa fa-check"></i>
                          <span className="fw-bold color-1">Modèle :</span>
                          {car.model}
                        </li>
                        <li className=" text-light ">
                          <i className="fa fa-check"></i>
                          <span className="fw-bold color-1">Kilométrage :</span>
                          {car.kms} Kms
                        </li>
                        <li className=" text-light ">
                          <i className="fa fa-check"></i>
                          <span className="fw-bold color-1">Energie :</span>
                          {car.energie}
                        </li>
                        <li className=" text-light ">
                          <i className="fa fa-check"></i>
                          <span className="fw-bold color-1">Boite :</span>
                          {car.boite}
                        </li>
                        <li className=" text-light ">
                          <i className="fa fa-check"></i>
                          <span className="fw-bold color-1">Année :</span>
                          {car.year}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 ">
                    <div className="car__details__tab__info__item  ">
                      <h5 className=" text-light">
                        Informations du propriétaire
                      </h5>
                      <ul className="">
                        <li className=" text-light ">
                          <i className="fa fa-check"></i>{" "}
                          <span className="fw-bold  color-1">Nom : &nbsp;</span>
                          {car.owner.username}
                        </li>
                        <li className=" text-light ">
                          <i className="fa fa-check"></i>
                          <span className="fw-bold color-1">Mobile :</span>
                          {car.owner.phone}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="car__details__sidebar">
                <div className="car__details__sidebar__model">
                  <p>Pricing in 11/26/2019</p>
                </div>
                <div className="car__details__sidebar__payment">
                  <ul>
                    <li>
                      Prix actuel <span>{car.price} TND</span>
                    </li>
                    <li>
                      Prix estimé <span>{car.price} TND</span>
                    </li>
                  </ul>
                  <a href="#" className="primary-btn">
                    <i className="fas fa-phone"></i> Contactez le propriétaire
                  </a>
                  <a href="#" className="primary-btn n">
                    <i class="fas fa-exclamation"></i> Rapporter
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

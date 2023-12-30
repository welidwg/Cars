import { NavLink } from "react-router-dom";
import WrapperDash from "./Layout/WrapperDash";
import { useEffect, useState } from "react";
import axios from "axios";
import { AUTH_TOKEN, AUTH_USER, URL } from "../../../constants";
import moment from "moment";
import { toast } from "react-toastify";

export default function CarsPage(props) {
  const user = AUTH_TOKEN && AUTH_USER;
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const link =
      user.role == 1 ? `${URL}/cars/owner/${user.id}` : `${URL}/cars`;
    axios
      .get(link)
      .then((res) => {
        setCars(res.data);
        if (res.data.length == 0) {
          toast.warn("Vous n'avez pas encore publié une voiture");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <WrapperDash>
      <div
        className="card border-none rounded"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="card-header">
          <NavLink to={"/dash/cars/new"} className={"btn primary-btn rounded"}>
            {" "}
            <i className="fas fa-plus"></i> Ajouter une voiture
          </NavLink>
        </div>
        <div className="card-body">
          <div className="table-responsive rounded">
            <table className="table table-white ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Model</th>
                  <th scope="col">Price</th>
                  <th scope="col">Kilometres</th>
                  <th scope="col">Energie</th>
                  <th scope="col">Boite</th>
                  <th scope="col">Year</th>
                  <th scope="col">Date d'ajout</th>
                  {user && user.role == 0 && <th scope="col">Propriétaire</th>}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cars.length != 0 &&
                  cars.map((car, index) => {
                    return (
                      <tr className="" key={index}>
                        <td scope="row">{index + 1}</td>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.price}</td>
                        <td>{car.kms}</td>
                        <td>{car.energie}</td>
                        <td>{car.boite}</td>
                        <td>{car.year}</td>
                        <td>{moment(car.createdAt).format("d MMM Y")}</td>
                        {user && user.role == 0 && (
                          <td>
                            {car.owner.username == user.username
                              ? "Vous"
                              : car.owner.username}{" "}
                            / {car.owner.phone}
                          </td>
                        )}
                        <td>
                          <a className="primary-btn rounded">
                            {" "}
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}

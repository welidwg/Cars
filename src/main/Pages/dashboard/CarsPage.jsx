import { NavLink } from "react-router-dom";
import WrapperDash from "./Layout/WrapperDash";

export default function CarsPage(props) {
  return (
    <WrapperDash>
      <div
        class="card border-none rounded"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="card-header">
          <NavLink to={"/dash/cars/new"} className={"btn primary-btn rounded"}>
            {" "}
            <i className="fas fa-plus"></i> Ajouter une voiture
          </NavLink>
        </div>
        <div class="card-body">
          <div class="table-responsive rounded">
            <table class="table table-white ">
              <thead>
                <tr>
                  <th scope="col">Brand</th>
                  <th scope="col">Model</th>
                  <th scope="col">Price</th>
                  <th scope="col">Kilometres</th>
                  <th scope="col">Energie</th>
                  <th scope="col">Boite</th>
                  <th scope="col">Year</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td scope="row">Mercedes</td>
                  <td>amg</td>
                  <td>200000</td>
                  <td>0</td>
                  <td>Essence</td>
                  <td>Automatique</td>
                  <td>2020</td>
                  <td>
                    <a className="primary-btn rounded">
                      {" "}
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
                <tr class="">
                  <td scope="row">Item</td>
                  <td>Item</td>
                  <td>Item</td>
                  <td>R1C3</td>
                  <td>R1C3</td>
                  <td>R1C3</td>
                  <td>R1C3</td>
                  <td>
                    <a className="primary-btn rounded">
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WrapperDash>
  );
}

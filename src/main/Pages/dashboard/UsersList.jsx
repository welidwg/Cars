import { NavLink } from "react-router-dom";
import WrapperDash from "./Layout/WrapperDash";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../constants";
import moment from "moment";

export default function UsersList(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((res) => {
        setUsers(res.data);
        console.log(res);
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
        <div className="card-header color-1 fw-bold fs-4  text-center">
          {/* <NavLink to={"/dash/cars/new"} className={"btn primary-btn rounded"}>
            {" "}
            <i className="fas fa-plus"></i> Ajouter une voiture
          </NavLink> */}
          Liste des utilisateurs
        </div>
        <div className="card-body">
          <div className="table-responsive rounded">
            <table className="table table-white ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom d'utilisateur</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Date de creation</th>
                  <th scope="col">Type</th>
                  <th scope="col">Voitures</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.length != 0 &&
                  users.map((user, index) => {
                    return (
                      <tr className="" key={index}>
                        <td scope="row">{index + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{moment(user.createdAt).format("d-MMM-Y")}</td>
                        <td className="">
                          <span className="">
                            {user.role == 0 ? "Admin" : "User"}
                          </span>
                        </td>
                        <td>2020</td>
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

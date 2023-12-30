import { NavLink } from "react-router-dom";

export default function NavbarDash(props) {
  return (
    <nav className="navbar navbar-expand bg-color-1 rounded-pill navbar-light sticky-top px-4 py-0 nav-dash">
      <NavLink to="/" className=" flex-shrink-0">
        <i className="fal fa-arrow-left text-dark"></i>
      </NavLink>
      <div className="mx-auto d-flex align-items-center">
        {/* <NavLink to="/dash/index" className="nav-link link-nav">
          Dashboard
        </NavLink> */}
        <NavLink to="/dash/cars" className="nav-link link-nav">
          Vos Voitures
        </NavLink>
        <NavLink to="/dash/profile" className="nav-link link-nav">
          Mon profile
        </NavLink>
      </div>

      <div className="navbar-nav align-items-center ms-auto">
        {/* <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-envelope me-lg-2"></i>
            <span className="d-none d-lg-inline-flex">Message</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src="dash/img/user.jpg"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-circle"
                  src="dash/img/user.jpg"
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="ms-2">
                  <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                  <small>15 minutes ago</small>
                </div>
              </div>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item text-center">
              See all message
            </a>
          </div>
        </div> */}
        {/* <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-bell me-lg-2"></i>
            <span className="d-none d-lg-inline-flex">Notificatin</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Profile updated</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">New user added</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <h6 className="fw-normal mb-0">Password changed</h6>
              <small>15 minutes ago</small>
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item text-center">
              See all notifications
            </a>
          </div>
        </div> */}
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            <img
              className="rounded-circle me-lg-2"
              src="/dash/img/user.jpg"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <span className="d-none text-light d-lg-inline-flex">Welid WG</span>
          </a>
          <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
            <a href="#" className="dropdown-item">
              Déconnexion
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

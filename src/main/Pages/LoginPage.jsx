import { NavLink } from "react-router-dom";
import Wrapper from "../Layouts/Wrapper";

export default function LoginPage(props) {
  return (
    <>
      <div
        className="container"
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
      >
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden  border-none my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div
                      className="flex-grow-1 bg-login-image"
                      style={{
                        backgroundImage: `url("img/back-car-2.jpg")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%) blur(3px)",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Bienvenue!</h4>
                      </div>
                      <form className="user">
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="email"
                            placeholder="Votre email"
                            name="email"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="password"
                            placeholder="Votre mot de passe"
                            name="password"
                          />
                        </div>
                        {/* <div className="mb-3">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                              />
                              <label
                                className="form-check-label custom-control-label"
                                for="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div> */}
                        <a
                          className=" primary-btn  d-block btn-user w-100 text-center"
                          type="submit"
                        >
                          Connexion
                        </a>
                      </form>
                      <hr />
                      {/* <div className="text-center">
                        <a className="small text-dark" href="">
                          Forgot Password?
                        </a>
                      </div> */}
                      <div className="text-center">
                        <NavLink to={"/register"} className="small text-dark">
                          Créez un compte !
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

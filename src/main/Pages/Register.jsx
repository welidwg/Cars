import { NavLink } from "react-router-dom";
import Wrapper from "../Layouts/Wrapper";

export default function Register(props) {
  return (
    <>
      <div
        className="container"
        data-aos="flip-right"
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
                        backgroundImage: `url("img/car-bg-3.jpg")`,
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
                        <h4 className="text-dark mb-4">Create your account!</h4>
                      </div>
                      <form className="user">
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="text"
                            placeholder="Enter your username..."
                            name="username"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="email"
                            placeholder="Enter Email Address..."
                            name="email"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="tel"
                            placeholder="Enter your phone number..."
                            name="phone"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="password"
                            placeholder="Password"
                            name="password"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user  shadow-none "
                            type="password"
                            placeholder="Repeat your password"
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
                          Start your experience
                        </a>

                        <hr />
                      </form>
                      {/* <div className="text-center">
                        <a className="small text-dark" href="">
                          Forgot Password?
                        </a>
                      </div> */}
                      <div className="text-center">
                        <NavLink to={"/login"} className="small text-dark">
                          Already have an account ? Login now!
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

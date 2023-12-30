import { NavLink } from "react-router-dom";
import Logo from "../../assets/5.png";
import $ from "jquery";
import { useEffect } from "react";
import ModalWrapper from "./ModalWrapper";

export default function Navbar(props) {
  useEffect(() => {
    $(".canvas__open").on("click", function () {
      $(".offcanvas-menu-wrapper").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on("click", function () {
      $(".offcanvas-menu-wrapper").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });

    $(".search-switch").on("click", function () {
      $(".search-model").fadeIn(400);
    });

    $(".search-close-switch").on("click", function () {
      $(".search-model").fadeOut(400, function () {
        $("#search-input").val("");
      });
    });
  }, []);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ul className="header__top__widget">
                <li>
                  <i className="far fa-clock"></i> Week day: 08:00 am to 18:00
                  pm
                </li>
                <li>
                  <i className="far fa-envelope"></i> Info.colorlib@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="header__top__right">
                <div className="header__top__phone">
                  <i className="fas fa-phone"></i>
                  <span>(+12) 345 678 910</span>
                </div>
                <div className="header__top__social">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo ">
              <NavLink to={"/home"} className={"d-flex align-items-center"}>
                <img src={Logo} alt="" className="img-fluid logo_main" />
                <span className="mx-2 text-light">AutoBot</span>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="header__nav">
              <nav className="header__menu">
                <ul>
                  <li className="">
                    <NavLink to={"/"}>Accueil</NavLink>
                  </li>
                  <li>
                    <a href="./car.html">Voitures</a>
                  </li>
                  <li>
                    <NavLink to={"/dash/cars"}>Mon espace</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="header__nav__widget">
                <div className="header__nav__widget__btn">
                  <a href="#">
                    <i className="fas fa-cart-plus"></i>
                  </a>
                  <a href="#" className="search-switch">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
                <NavLink to={"/login"} className="primary-btn">
                  Connexion
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <span className="fas fa-bars"></span>
        </div>
      </div>
    </header>
  );
}

import Logo from "../../assets/4.png";

export default function Footer(params) {
  return (
    <>
      <footer class="footer set-bg">
        <div class="container">
          <div class="footer__contact">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="footer__contact__title">
                  <h2>Contact Us Now!</h2>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="footer__contact__option">
                  <div class="option__item">
                    <i class="fa fa-phone"></i>
                    (+12) 345 678 910
                  </div>
                  <div class="option__item email">
                    <i class="fa fa-envelope-o"></i>
                    Colorlib@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="footer__about">
                <div class="footer__logo">
                  <a href="#">
                    <img src={Logo} className="w-75" alt="logo" />
                  </a>
                </div>
                <p className="text-white fw-bold">
                  Any questions? Let us know in store at 625 Gloria Union,
                  California, United Stated or call us on (+1) 96 123 8888
                </p>
                <div class="footer__social">
                  <a href="#" class="facebook">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="#" class="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="google">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="#" class="skype">
                    <i class="fab fa-skype"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-2 offset-lg-1 col-md-3">
              <div class="footer__widget">
                <h5>Infomation</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Purchase
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Payemnt
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Return
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3">
              <div class="footer__widget">
                <h5>Infomation</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Hatchback
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Sedan
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      SUV
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Crossover
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer__brand">
                <h5>Top Brand</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fas fa-angle-right"></i>
                      Abarth
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Acura
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Alfa Romeo
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                      Audi
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fas fa-angle-right"></i>
                      BMW
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fas fa-angle-right"></i>
                      Chevrolet
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fas fa-angle-right"></i>
                      Ferrari
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fas fa-angle-right"></i>
                      Honda
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

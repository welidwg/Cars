import { useEffect } from "react";
// import Hero from "../../assets/img/hero-bg.jpg";
import Video from "../../assets/video.mp4";

export default function Header(props) {
  useEffect(() => {
    let video = document.getElementById("video-background");
    video.playbackRate = 0.8;
    setInterval(() => {
      if (video.currentTime > 6.6) {
        video.pause();
      }
    }, 1000);
  }, []);
  return (
    <>
      <section className="hero spad set-bg" data-setbg={""}>
        <video id="video-background" muted loop src={Video} autoPlay={true} />
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero__text">
                <div className="hero__text__title">
                  <span>FIND YOUR DREAM CAR</span>
                  <h2>Porsche Cayenne S</h2>
                </div>
                <div className="hero__text__price">
                  <div className="car-model">Model 2019</div>
                  <h2>
                    $399<span>/Month</span>
                  </h2>
                </div>
                <a href="#" className="primary-btn">
                  <img src="/img/wheel.png" alt="" /> Test Drive
                </a>
                <a href="#" className="primary-btn more-btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-dark"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      Find a car
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link text-dark"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      Buy Car
                    </a>
                  </li> */}
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-2" role="tabpanel">
                    <div className="hero__tab__form">
                      <h2>Search for a car</h2>
                      <form>
                        <div className="select-list">
                          <div className="select-list-item">
                            <p>Select Year</p>
                            <select>
                              <option data-display=" ">Select Year</option>
                              <option value="">2020</option>
                              <option value="">2017</option>
                              <option value="">2018</option>
                              <option value="">2017</option>
                              <option value="">2016</option>
                              <option value="">2015</option>
                            </select>
                          </div>
                          <div className="select-list-item">
                            <p>Select Brand</p>
                            <select>
                              <option data-display=" ">Select Brand</option>
                              <option value="">Acura</option>
                              <option value="">Audi</option>
                              <option value="">Bentley</option>
                              <option value="">BMW</option>
                              <option value="">Bugatti</option>
                            </select>
                          </div>
                          <div className="select-list-item">
                            <p>Select Model</p>
                            <select>
                              <option data-display=" ">Select Model</option>
                              <option value="">Q3</option>
                              <option value="">A4 </option>
                              <option value="">AVENTADOR</option>
                            </select>
                          </div>
                          <div className="select-list-item">
                            <p>Select Mileage</p>
                            <select>
                              <option data-display=" ">Select Mileage</option>
                              <option value="">27</option>
                              <option value="">25</option>
                              <option value="">15</option>
                              <option value="">10</option>
                            </select>
                          </div>
                        </div>
                        <div className="car-price">
                          <p>Price Range:</p>
                          <div className="price-range-wrap">
                            <div className="price-range"></div>
                            <div className="range-slider">
                              <div className="price-input">
                                <input type="text" id="amount" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="site-btn">
                          Searching
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

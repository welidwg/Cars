import { useEffect } from "react";
import Logo from "../../assets/4.png";
import Video from "../../assets/video.mp4";
import { NavLink } from "react-router-dom";

function Index(props) {
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
      <section
        className=" d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <video id="video-background" muted loop src={Video} autoPlay={true} />
        {/* <h1 className="text-danger">Home one</h1> */}
        <div
          className=""
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          data-aos-delay="900"
        >
          <img className={"img-fluid logo "} src={Logo} />
        </div>

        <div
          className=" d-flex justify-content-center align-items-center"
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          data-aos-delay="1200"
        >
          <a href={"/home"} className="glowing-btn mx-auto">
            <span className="glowing-txt">
              Start{" "}
              <span className="faulty-letter">
                {" "}
                <i className="fas fa-arrow-right"></i>{" "}
              </span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
export default Index;

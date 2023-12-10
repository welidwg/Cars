import Navbar from "./Navbar";
import SideBar from "./SideBar";
import "../../assets/style.css";
import $ from "jquery";
import { useEffect } from "react";

export default function Wrapper(props) {
  useEffect(() => {

  }, []);
  return (
    <>
      <div id="preloder">
        <div className="loader"></div>
      </div>
      <div className="offcanvas-menu-overlay"></div>
      <SideBar />
      <Navbar />
      <section>{props.children}</section>
      <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div class="search-close-switch">+</div>
          <form class="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </>
  );
}

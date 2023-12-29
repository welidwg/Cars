import NavbarDash from "../components/NavbarDash";
import SideBarDash from "../components/SideBarDash";
import "../../../../assets/dash/styleDash.css";
import "../../../../assets/dash/bootstrap.min.css";
import { useEffect } from "react";
import $ from "jquery";
export default function WrapperDash(props) {
  useEffect(() => {
    $(".sidebar-toggler").click(function () {
      $(".sidebar, .content").toggleClass("open");
      return false;
    });
  }, []);
  return (
    <div className="container-xxl position-relative bg-dark d-flex p-0">
      {/* sidebar */}
      <SideBarDash />

      <div className="content bg-dark">
        {/* navbar */}
        <NavbarDash />
        {/* main */}
        <div className="container-fluid pt-4 px-4 bg-dark">
          <div className="row vh-100 bg-secondary dash-content  rounded align-items-center justify-content-center mx-0">
            {props.children}
          </div>
        </div>
        {/* footer */}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./main/Pages/Home";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import LoginPage from "./main/Pages/LoginPage";
import Wrapper from "./main/Layouts/Wrapper";
import Register from "./main/Pages/Register";
import NotFound from "./main/Pages/error/NotFound";
import IndexDashboard from "./main/Pages/dashboard/IndexDashboard";
import WrapperDash from "./main/Pages/dashboard/Layout/WrapperDash";
function App() {
  useEffect(() => {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
    $(window).on("load", function () {
      $(".filter__controls li").on("click", function () {
        $(".filter__controls li").removeClass("active");
        $(this).addClass("active");
      });
      if ($(".car-filter").length > 0) {
        var containerEl = document.querySelector(".car-filter");
        // var mixer = mixitup(containerEl);
      }
      // $(".set-bg").each(function () {
      //   var bg = $(this).data("setbg");
      //   $(this).css("background-image", "url(" + bg + ")");
      // });
      Aos.init();
    });
  }, []);

  return (
    <React.StrictMode>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </React.StrictMode>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Index from "./main/Pages/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./main/Pages/Home";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import "./assets/style.css";
// import "./assets/js/main.js";
function App() {
  useEffect(() => {
    $(window).on("load", function () {
      $(".loader").fadeOut();
      $("#preloder").delay(200).fadeOut("slow");
      $(".filter__controls li").on("click", function () {
        $(".filter__controls li").removeClass("active");
        $(this).addClass("active");
      });
      if ($(".car-filter").length > 0) {
        var containerEl = document.querySelector(".car-filter");
        // var mixer = mixitup(containerEl);
      }
      $(".set-bg").each(function () {
        var bg = $(this).data("setbg");
        $(this).css("background-image", "url(" + bg + ")");
      });
    });
  }, []);
  const [count, setCount] = useState(0);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className=" ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;

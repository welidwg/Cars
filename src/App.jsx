import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Index from "./main/Pages/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./main/Pages/Home";
import "./assets/js/main.js";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className=" ">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;

import { Route, Routes } from "react-router";
import WrapperDash from "./main/Pages/dashboard/Layout/WrapperDash";
import IndexDashboard from "./main/Pages/dashboard/IndexDashboard";

export default function Dash(props) {
  return (
    <div className="bg-dark">
      <WrapperDash>
        <Routes>
          <Route path="/" element={<IndexDashboard />} />
        </Routes>
      </WrapperDash>
    </div>
  );
}

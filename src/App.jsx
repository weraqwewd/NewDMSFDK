import BloodGlucoseReport from "./Pages/BloodGlucoseReport";
import ChildRegistration from "./Pages/ChildRegistration";
import Education from "./Pages/Education";
import Food from "./Pages/Food";
import FoodRecommendation from "./Pages/FoodRecommendation";
import HomePage from "./Pages/HomePage";
import Information from "./Pages/Information";
import InsulinDosageReport from "./Pages/InsulinDosageReport";
import Loading from "./Pages/Loading";
import LoginPage from "./Pages/LoginPage";
import ParentRegistration from "./Pages/ParentRegistration";
import Registration from "./Pages/Registration";
import WelcomePage from "./Pages/WelcomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route index Component={LoginPage} />
            <Route path="/signup" Component={ParentRegistration} />
            <Route path="/childReg" Component={ChildRegistration} />
            <Route path="/log" Component={LoginPage} />
            <Route path="/Home" Component={HomePage} />
            <Route path="/food" Component={FoodRecommendation} />
            <Route path="/edu" Component={Education} />
            <Route path="/insRep" Component={InsulinDosageReport} />
            <Route path="/gRep" Component={BloodGlucoseReport} />
            <Route path="/info" Component={Information} />
            <Route path="/food/:name" element={<Food />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;

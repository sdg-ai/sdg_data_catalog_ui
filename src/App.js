import "./Sass/main.scss";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Screens
import BrowsingScreen from "./Screens/BrowsingScreen";
import MethodologyScreen from "./Screens/MethodologyScreen";
import SubmitDatasetScreen from "./Screens/SubmitDatasetScreen";
import HomeScreen from "./Screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="browsing" element={<BrowsingScreen />} />
        <Route path="methodology" element={<MethodologyScreen />} />
        <Route path="submit-dataset" element={<SubmitDatasetScreen />} />
        <Route index element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

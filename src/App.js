import "./Sass/main.scss";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Screens
import BrowsingScreen from "./Screens/BrowsingScreen";
import Methodology from "./Screens/Methodology";
import ProposeADataSetScreen from "./Screens/ProposeADataSetScreen";
import HomeScreen from "./Screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="browsing" element={<BrowsingScreen />} />
        <Route path="methodology" element={<Methodology />} />
        <Route path="proposeadataset" element={<ProposeADataSetScreen />} />
        <Route index element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

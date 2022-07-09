import { Suspense, lazy } from "react";
import "./Sass/main.scss";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Screens
import MethodologyPage from "./Pages/MethodologyPage";
import Footer from "./Components/Nav&Footer/Footer";

//HOC to solve issue with react router sending user to middle of the mage
import ScrollToTopFix from "./HOC/ScrollToTopFix";
import MainLoader from "./Components/MainLoader";

const SubmitDatasetPage = lazy(() => import("./Pages/SubmitDatasetPage"));
const DataSetPage = lazy(() => import("./Pages/DataSetPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const SDGCategoryPage = lazy(() => import("./Pages/SDGCategoryPage"));
const SearchResultsPage = lazy(() => import("./Pages/SearchResultsPage"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopFix>
        <Suspense fallback={<MainLoader />}>
          <Routes>
            <Route path="methodology" element={<MethodologyPage />} />
            <Route path="submit-dataset" element={<SubmitDatasetPage />} />
            <Route path="sdg/:goal" element={<SDGCategoryPage />} />
            <Route path="dataset/:dataset" element={<DataSetPage />} />
            <Route path="search-results" element={<SearchResultsPage />} />

            <Route exact path="/" element={<HomePage />} />

            {/* TODO - MAKE 404 page work */}
          </Routes>
          <Footer />
        </Suspense>
      </ScrollToTopFix>
    </BrowserRouter>
  );
};

export default App;

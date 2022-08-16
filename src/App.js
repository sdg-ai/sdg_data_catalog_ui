import { Suspense, lazy } from "react";
import "./Sass/main.scss";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Screens
import MethodologyPage from "./Pages/MethodologyPage";
import Footer from "./Components/NavFooter/Footer";

//HOC to solve issue with react router sending user to middle of the mage
import ScrollToTopFix from "./HOC/ScrollToTopFix";
import LoadingSpinner from "./Components/LoadingSpinner";

//Lazy loading Pages
const SubmitDatasetPage = lazy(() => import("./Pages/SubmitDatasetPage"));
const DataSetPage = lazy(() => import("./Pages/DataSetPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const SDGCategoryPage = lazy(() => import("./Pages/SDGCategoryPage"));
const SearchResultsPage = lazy(() => import("./Pages/SearchResultsPage"));
const FourOFour = lazy(() => import("./Pages/FourOFour"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopFix>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="methodology" element={<MethodologyPage />} />
            <Route path="submit-dataset" element={<SubmitDatasetPage />} />
            <Route path="sdg/:goal" element={<SDGCategoryPage />} />
            <Route path="dataset/:id" element={<DataSetPage />} />
            <Route path="search-results" element={<SearchResultsPage />} />
            <Route path="about" element={<AboutPage />} />

            <Route exact path="/" element={<HomePage />} />

            {/*404 */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
          <Footer />
        </Suspense>
      </ScrollToTopFix>
    </BrowserRouter>
  );
};

export default App;

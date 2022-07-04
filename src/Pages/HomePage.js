//Components
import HomeHero from "../Components/HomeComponents/HomeHero";
import Navbar from "../Components/Nav&Footer/Navbar";
import SDGGoalsHome from "../Components/HomeComponents/SDGGoalsHome";
import FeaturedDataSetList from "../Components/HomeComponents/FeaturedDataSetList";
import SubmitNewDataSet from "../Components/SubmitNewDataSetBanner";

const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar transparent />
      <HomeHero />
      <SDGGoalsHome />
      <FeaturedDataSetList />
      <SubmitNewDataSet />
    </div>
  );
};

export default HomePage;

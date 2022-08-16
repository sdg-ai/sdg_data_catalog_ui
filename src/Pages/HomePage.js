//Components
import HomeHero from "../Components/HomePageComponents/HomeHero";
import Navbar from "../Components/NavFooter/Navbar";
import SDGGoalsContainer from "../Components/HomePageComponents/SDGGoalsContainer";
import FeaturedDataSetsContainer from "../Components/HomePageComponents/FeaturedDataSetsContainer";
import SubmitNewDataSetBanner from "../Components/SubmitNewDataSetBanner";

//Meta wrapper
import Meta from "../Components/MetaWrapper";

const HomePage = () => {
  return (
    <div className="homePage">
      <Meta title="Home || SDG Data Catalog" />
      <Navbar transparent />
      <main>
        <HomeHero />
        <SDGGoalsContainer />
        <FeaturedDataSetsContainer />
        <SubmitNewDataSetBanner />
      </main>
    </div>
  );
};

export default HomePage;

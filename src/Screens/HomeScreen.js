//Components
import Hero from "../Components/HomeComponents/Hero";
import Navbar from "../Components/Navbar";
import SDGHomeList from "../Components/HomeComponents/SDGHomeList";
import FeaturedDataList from "../Components/HomeComponents/FeaturedDataList";
import SubmitNewDataSet from "../Components/HomeComponents/SubmitNewDataSet";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar transparent />
      <Hero />
      <SDGHomeList />
      <FeaturedDataList />
      <SubmitNewDataSet />
    </div>
  );
};

export default HomeScreen;

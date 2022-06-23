//Components
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import SDGGoalsList from "../Components/SDGGoalsList";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar transparent />
      <Hero />
      <SDGGoalsList />
    </div>
  );
};

export default HomeScreen;

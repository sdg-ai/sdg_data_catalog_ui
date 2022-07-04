//react router
import { useParams } from "react-router-dom";

//Components
import Navbar from "../Components/Nav&Footer/Navbar";
import SubmitNewDataSetBanner from "../Components/SubmitNewDataSetBanner";
import DropDownBar from "../Components/SDGCategoryPageComponents/DropDownBar";
import SDGDatasetHero from "../Components/SDGDatasetHero";
import DataSetCardsContainer from "../Components/SDGCategoryPageComponents/DataSetCardsContainer";

import tempLogo from "../assets/logos/sdg-icon-01.svg";

const SDGCategoryScreen = () => {
  const { goal } = useParams();

  return (
    <section>
      <Navbar />
      <SDGDatasetHero logo={tempLogo} title="Goal 1" subTitle="No Poverty" />
      <DropDownBar />
      <DataSetCardsContainer />
      <SubmitNewDataSetBanner />
    </section>
  );
};

export default SDGCategoryScreen;

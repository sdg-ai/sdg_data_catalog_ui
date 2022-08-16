//React router
import { useParams } from "react-router-dom";

//Components
import Navbar from "../Components/NavFooter/Navbar";
import SubmitNewDataSetBanner from "../Components/SubmitNewDataSetBanner";
import DropDownFiltersContainer from "../Components/SDGCategoryPageComponents/DropDownFiltersContainer";
import SDGDatasetHero from "../Components/SDGDatasetHero";
import SDGDataSetsContainer from "../Components/SDGCategoryPageComponents/SDGDataSetsContainer";

//Meta Wrapper
import Meta from "../Components/MetaWrapper";

//TEMPORARY DATA
import tempLogo from "../assets/logos/sdg-icon-01.svg";

const SDGCategoryScreen = () => {
  const { goal } = useParams();

  return (
    <div className="SDGCategoryScreen">
      <Meta title="SDG's || SDG Data Catalog" />
      <Navbar />
      <main>
        <SDGDatasetHero logo={tempLogo} title="Goal 1" subTitle="No Poverty" />
        <DropDownFiltersContainer />
        <SDGDataSetsContainer />
        <SubmitNewDataSetBanner />
      </main>
    </div>
  );
};

export default SDGCategoryScreen;

//Components
import Navbar from "../Components/NavFooter/Navbar";
import SDGDatasetHero from "../Components/SDGDatasetHero";
import SubmitNewDataSetBanner from "../Components/SubmitNewDataSetBanner";
import SimilarDataSetsContainer from "../Components/DataSetPageComponents/SimilarDataSetsContainer";
import DatasetTrendsContainer from "../Components/DataSetPageComponents/DatasetTrendsContainer";
import RelatedPublicationsContainer from "../Components/DataSetPageComponents/RelatedPublicationsContainer";

//Meta Wrappers
import Meta from "../Components/MetaWrapper";

//TEMPORARY DATA
import tempLogo from "../assets/tempPhotos/tempDataSetImage1.jpg";

const DataSetPage = () => {
  return (
    <div className="dataSetPage">
      <Meta title="SDG Data Catalog || Dataset" />
      <Navbar />
      <main>
        <SDGDatasetHero
          dataSetPage
          logo={tempLogo}
          title="Irena Renewable Energy Statistics Lorem ipsum dolor"
        />
        <RelatedPublicationsContainer />
        <DatasetTrendsContainer />
        <SimilarDataSetsContainer />

        <SubmitNewDataSetBanner />
      </main>
    </div>
  );
};

export default DataSetPage;

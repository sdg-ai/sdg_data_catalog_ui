//Components
import Navbar from "../Components/Nav&Footer/Navbar";
import SDGDatasetHero from "../Components/SDGDatasetHero";
import SubmitNewDataSetBanner from "../Components/SubmitNewDataSetBanner";
import SimilarDataSets from "../Components/DataSetPageComponents/SimilarDataSets";
import DatasetTrends from "../Components/DataSetPageComponents/DatasetTrends";
import RelatedPublications from "../Components/DataSetPageComponents/RelatedPublications";

//TEMPORARY DATA
import tempLogo from "../assets/tempPhotos/tempDataSetImage1.jpg";

const DataSetPage = () => {
  return (
    <section>
      <Navbar />
      <SDGDatasetHero
        dataSetPage
        logo={tempLogo}
        title="Irena Renewable Energy Statistics Lorem ipsum dolor"
      />
      <RelatedPublications />
      <DatasetTrends />
      <SimilarDataSets />
      <SubmitNewDataSetBanner />
    </section>
  );
};

export default DataSetPage;

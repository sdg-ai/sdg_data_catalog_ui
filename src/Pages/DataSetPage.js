import React from "react";
import Navbar from "../Components/Nav&Footer/Navbar";
import SDGDatasetHero from "../Components/SDGDatasetHero";

import tempLogo from "../assets/tempPhotos/tempDataSetImage1.jpg";
import SubmitNewDataSetBanner from "../Components/SubmitNewDataSetBanner";
import SimilarDataSets from "../Components/DataSetPageComponents/SimilarDataSets";
import DatasetTrends from "../Components/DataSetPageComponents/DatasetTrends";

const DataSetPage = () => {
  return (
    <section>
      <Navbar />
      <SDGDatasetHero
        dataSetPage
        logo={tempLogo}
        title="Irena Renewable Energy Statistics Lorem ipsum dolor"
      />
      <DatasetTrends />
      <SimilarDataSets />
      <SubmitNewDataSetBanner />
    </section>
  );
};

export default DataSetPage;

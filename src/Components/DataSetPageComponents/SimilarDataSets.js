import React from "react";
import { dataSets } from "../../utils/tempDataArray";
import DataSetCards from "../DataSetCards";
import Title from "../Title";

const SimilarDataSets = () => {
  return (
    <section className="generalSectionGrey">
      <section className="generalSectionGrey__container">
        <Title title="Similar Data Sets" />
        <DataSetCards dataSets={dataSets} length={3} />
      </section>
    </section>
  );
};

export default SimilarDataSets;

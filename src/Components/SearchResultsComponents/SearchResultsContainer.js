import { useState } from "react";

//Components
import DataSetCards from "../DataSetCards";
import Title from "../Title";

//TEMPORARY DATA
import { dataSets } from "../../utils/tempDataArray";

const SearchResultsContainer = () => {
  return (
    <section className="generalSectionWhite">
      <section className="generalSectionWhite__container">
        <section>
          <Title title="Search results" />
          <DataSetCards dataSets={dataSets} length={9} />
        </section>
        <section>
          <p>pagination</p>
        </section>
      </section>
    </section>
  );
};

export default SearchResultsContainer;

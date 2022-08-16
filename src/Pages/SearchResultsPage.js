import { useState } from "react";

//Components
import Navbar from "../Components/NavFooter/Navbar";
import SearchResultsContainer from "../Components/SearchResultsPageComponents/SearchResultsContainer";

//Meta Wrapper
import Meta from "../Components/MetaWrapper";

//TEMPORARY DATA
import { dataSets } from "../utils/tempDataArray";

const SearchResultsPage = () => {
  return (
    <div className="searchResultsPage">
      <Meta title="Search Results || SDG Data Catalog" />
      <Navbar />
      <main>
        <SearchResultsContainer />
      </main>
    </div>
  );
};

export default SearchResultsPage;

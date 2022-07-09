import { useState } from "react";

//Components
import Navbar from "../Components/Nav&Footer/Navbar";
import SearchResultsContainer from "../Components/SearchResultsComponents/SearchResultsContainer";

//TEMPORARY DATA
import { dataSets } from "../utils/tempDataArray";

const SearchResultsPage = () => {
  return (
    <div className="searchResultsPage">
      <Navbar />
      <main>
        <SearchResultsContainer />
      </main>
    </div>
  );
};

export default SearchResultsPage;

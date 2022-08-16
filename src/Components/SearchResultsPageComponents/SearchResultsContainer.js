import { useState } from "react";

//Components
import DataSetCardsContainer from "../DataSetCardsContainer";
import Title from "../Title";

//TEMPORARY DATA
import { dataSets } from "../../utils/tempDataArray";
import ResultsBar from "../ResultsBar";

const SearchResultsContainer = () => {
  const [searchResults, setSearchResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Search for datasets & Keywords");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.length < 1) {
      setPlaceHolder("Please type a keyword or a dataset here");

      setTimeout(() => setPlaceHolder("Search for datasets & Keywords"), 1500);
      return;
    }
    setSearchResults(5);
  };

  const handleClearSearch = () => {
    setSearchResults(0);
    setSearchTerm("");
  };
  return (
    <section className="searchResultsContainer generalSectionWhite">
      <section className="searchResultsContainer__container generalSectionWhite__container">
        <Title title="Search for a dataset" />
        <section className="searchResultsContainer__inputContainer ">
          <form onSubmit={handleSearch} className="searchResultsContainer__form">
            {searchResults < 1 ? (
              <i
                className="fa-solid fa-magnifying-glass navBar__searchIcon searchIcon"
                onClick={handleSearch}
              ></i>
            ) : (
              <i
                className="fa-solid fa-xmark navBar__searchIcon searchIcon"
                onClick={handleClearSearch}
              ></i>
            )}
            <input
              placeholder={placeHolder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="searchResultsContainer__input"
            />
          </form>
        </section>
        <section className="searchResultsContainer__resultsContainer">
          <Title description="Search results (38)" />
          <DataSetCardsContainer dataSets={dataSets} length={9} />
        </section>
      </section>
    </section>
  );
};

export default SearchResultsContainer;

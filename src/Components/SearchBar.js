import { useEffect, useState } from "react";

//React router
import { Link } from "react-router-dom";

//TEMPORARY DATA
import { tempResults } from "../utils/tempDataArray";

const SearchBar = ({ transparent }) => {
  const [searchResults, setSearchResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Search for datasets & Keywords");

  useEffect(() => {
    if (searchTerm.length < 1) {
      setSearchResults(0);
    }
  }, [searchTerm]);

  const handleBarSearch = (e) => {
    e.preventDefault();

    if (searchTerm.length < 1) {
      setPlaceHolder("Please type a keyword or a dataset here");

      setTimeout(() => setPlaceHolder("Search for datasets & Keywords"), 1500);
      return;
    }
    setSearchResults(5);
  };

  const handleBarClearSearch = () => {
    setSearchResults(0);
    setSearchTerm("");
  };

  return (
    <div className={`searchBar ${transparent && "searchBar--transparent"}`}>
      <div className="searchBar__container">
        <form onSubmit={handleBarSearch}>
          {searchResults < 1 ? (
            <i
              className="fa-solid fa-magnifying-glass navBar__searchIcon searchIcon"
              onClick={handleBarSearch}
            ></i>
          ) : (
            <i
              className="fa-solid fa-xmark navBar__searchIcon searchIcon"
              onClick={handleBarClearSearch}
            ></i>
          )}
          <input
            type="text"
            placeholder={placeHolder}
            className="mainTextInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      {searchResults > 0 && (
        <section className="searchBar__resultsContainer">
          {tempResults.map((result) => (
            <section key={result.id}>
              <img alt="something" src={require(`../assets/tempPhotos/${result.imageURL}`)} />
              <div>
                <h5>{result.title}</h5>
                {result.subTitle && <p>{result.subTitle}</p>}
              </div>
            </section>
          ))}
          <div className="resultsBar__footer">
            <Link to="/search-results">
              <p>Show all results (38)</p>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchBar;

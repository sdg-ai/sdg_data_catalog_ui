import { useState, useEffect } from "react";

//React Count Up
import CountUp from "react-countup";

//Components
import ResultsBar from "../ResultsBar";

const HomeHero = () => {
  const [dataSetQuantity, setDataSetQuantity] = useState(3926);
  const [searchResults, setSearchResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Search for datasets & Keywords");

  useEffect(() => {
    if (searchTerm.length < 1) {
      setSearchResults(0);
    }
  }, [searchTerm]);

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
    <div className="hero">
      <div className="hero__container">
        <section className="hero__title">
          <h1>SDG Data Catalog</h1>
        </section>
        <section className="hero__description">
          <h3>
            Support researchers and innovators to advance the 3030 agenda with relevant and
            real-time datasets.
          </h3>
        </section>
        <section className="hero__input">
          <form onSubmit={handleSearch}>
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
            />
          </form>
          {searchResults > 0 && <ResultsBar hero={true} />}
        </section>
        <section className="hero__dataSets">
          <h5>
            <CountUp end={dataSetQuantity} duration={2.5} separator="," delay={1} />
            {` SDG relevant datasets available`}
          </h5>
        </section>
        <div>
          <i className="fa-solid fa-angles-down downIcon"></i>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

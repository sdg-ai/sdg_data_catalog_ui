import axios from "axios";
import { useState, useEffect } from "react";

//React Count Up
import CountUp from "react-countup";
import OutsideClickHandler from "../../Hooks/OutsideClickHandler";

//Components
import ResultsBar from "../ResultsBar";

const HomeHero = () => {
  const [dataSetQuantity, setDataSetQuantity] = useState(0);
  const [searchResults, setSearchResults] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Search for datasets & Keywords");

  useEffect(() => {
    const fetchTotalDatasets = async () => {
      try {
        const res = await axios.get(
          "https://611ab28bc2bfd20017332822.mockapi.io/api/datasetslength"
        );

        setDataSetQuantity(res.data[0].totalDatasets);
      } catch (error) {
        console.log("Something went wrong fetching the dataset Length", error);
      }
    };

    fetchTotalDatasets();
  }, []);

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
    <section className="homeHero">
      <header className="homeHero__container">
        <section className="homeHero__title">
          <h1>SDG Data Catalog</h1>
        </section>
        <div className="homeHero__description">
          <h2>
            Support researchers and innovators to advance the 2030 agenda with relevant and
            real-time datasets.
          </h2>
        </div>
        <div className="homeHero__input">
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
          <OutsideClickHandler handleBlur={handleClearSearch}>
            {searchResults > 0 && <ResultsBar hero={true} />}
          </OutsideClickHandler>
        </div>
        <div className="homeHero__datasets">
          <p>
            <CountUp end={dataSetQuantity} duration={2.5} separator="," delay={1} />
            {` SDG relevant datasets available`}
          </p>
        </div>
        <div>
          <i className="fa-solid fa-angles-down downIcon"></i>
        </div>
      </header>
    </section>
  );
};

export default HomeHero;

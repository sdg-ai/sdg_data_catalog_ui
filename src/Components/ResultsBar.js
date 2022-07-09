//React router
import { Link } from "react-router-dom";

//TEMPORARY DATA
import { tempResults } from "../utils/tempDataArray";

const ResultsBar = () => {
  return (
    <section className="resultsBar">
      <div className="resultsBar__container">
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
      </div>
    </section>
  );
};

export default ResultsBar;

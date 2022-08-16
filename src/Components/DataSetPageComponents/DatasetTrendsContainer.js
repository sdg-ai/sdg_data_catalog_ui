//Components
import Title from "../Title";

const DatasetTrendsContainer = () => {
  return (
    <section className="datasetTrendsContainer generalSectionWhite">
      <section className="generalSectionWhite__container">
        <section>
          <Title title="Dataset Trends" />
        </section>
        <div className="datasetTrendsContainer__trendContainer">
          <div className="datasetTrendsContainer__trend">
            <h2>4</h2>
            <h5>Mentions short term</h5>
            <p>How often this dataset was mentioned in research papers in the last 3 months</p>
          </div>
          <div className="datasetTrendsContainer__trend">
            <h2>16</h2>
            <h5>Mentions mid term</h5>
            <p>How often this dataset was mentioned in research papers in the last 12 months</p>
          </div>
          <div className="datasetTrendsContainer__trend">
            <h2>24</h2>
            <h5>Mentions long term</h5>
            <p>How often this dataset was mentioned in research papers in total</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DatasetTrendsContainer;

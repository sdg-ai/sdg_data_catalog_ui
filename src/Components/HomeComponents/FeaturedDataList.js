//Temp assets
import { dataSets } from "../../utils/tempDataArray";
import DataSetCard from "./DataSetCard";

const FeaturedDataList = () => {
  return (
    <div className="featuredDataList">
      <section className="featuredDataList__container">
        <section className="featuredDataList__titleContainer">
          <h2>Featured Datasets</h2>
          <h3>
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor.
          </h3>
        </section>
        <section className="featuredDataList__cards">
          {dataSets.map((dataSet) => (
            <DataSetCard dataSet={dataSet} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default FeaturedDataList;

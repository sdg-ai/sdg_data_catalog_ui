//Temp assets
import { dataSets } from "../../utils/tempDataArray";
import Title from "../Title";
import DataSetCard from "./DataSetCard";

const FeaturedDataList = () => {
  return (
    <div className="featuredDataList">
      <section className="featuredDataList__container">
        <Title
          title="Featured Datasets"
          description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor."
        />
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

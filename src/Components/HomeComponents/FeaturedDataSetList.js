//Components
import DataSetCards from "../DataSetCards";
import Title from "../Title";

//TEMPORARY DATA
import { dataSets } from "../../utils/tempDataArray";

const FeaturedDataSetList = () => {
  return (
    <div className="featuredDatasetList generalSectionGrey">
      <section className="featuredDatasetList__container generalSectionGrey__container">
        <Title
          title="Featured Datasets"
          description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor."
        />
        <DataSetCards dataSets={dataSets} />
      </section>
    </div>
  );
};

export default FeaturedDataSetList;

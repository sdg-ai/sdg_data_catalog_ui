//Components
import DataSetCardsContainer from "../DataSetCardsContainer";
import Title from "../Title";

//TEMPORARY DATA
import { dataSets } from "../../utils/tempDataArray";

const SimilarDataSetsContainer = () => {
  return (
    <section className="generalSectionGrey">
      <section className="generalSectionGrey__container">
        <Title title="Similar Data Sets" />
        <DataSetCardsContainer dataSets={dataSets} length={3} />
      </section>
    </section>
  );
};

export default SimilarDataSetsContainer;

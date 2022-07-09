//Components
import DataSetCards from "../DataSetCards";

//TEMPORARY DATA
import { dataSets } from "../../utils/tempDataArray";

const DataSetCardsContainer = () => {
  return (
    <section className="dataSetCardsContainer">
      <section className="dataSetCardsContainer__container">
        <DataSetCards dataSets={dataSets} length={9} />
        <div className="dataSetCardsContainer__pagination">Pagination</div>
      </section>
    </section>
  );
};

export default DataSetCardsContainer;

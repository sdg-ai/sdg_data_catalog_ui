import { dataSets } from "../../utils/tempDataArray";
import DataSetCards from "../DataSetCards";

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

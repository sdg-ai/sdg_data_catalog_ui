//Components
import DataSetCardsContainer from "../DataSetCardsContainer";

//TEMPORARY DATA
import { dataSets } from "../../utils/tempDataArray";

const SDGDataSetsContainer = () => {
  return (
    <section className="SDGDataSetsContainer">
      <section className="SDGDataSetsContainer__container">
        <DataSetCardsContainer dataSets={dataSets} length={9} />
      </section>
    </section>
  );
};

export default SDGDataSetsContainer;

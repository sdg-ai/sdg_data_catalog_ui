import DataSetCard from "./DataSetCard";

const DataSetCards = ({ dataSets, length = 6 }) => {
  //Limits the amount of cards we output with the components
  const newDatasets = dataSets.slice(0, length);

  return (
    <section className="cardsContainer">
      {newDatasets.map((dataSet, index) => (
        <DataSetCard dataSet={dataSet} key={`${dataSet.title} - ${index}`} />
      ))}
    </section>
  );
};

export default DataSetCards;

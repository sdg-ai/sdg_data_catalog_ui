import DataSetCard from "./DataSetCard";

const DataSetCards = ({ dataSets, length = 6 }) => {
  //Limits the amount of cards we output with the components
  const newDatasets = dataSets.slice(0, length);

  return (
    <section className="dataSetCards">
      {newDatasets.map((dataSet) => (
        <DataSetCard dataSet={dataSet} />
      ))}
    </section>
  );
};

export default DataSetCards;

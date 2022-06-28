const DataSetCard = ({ dataSet }) => {
  return (
    <div className="dataSetCard">
      {/* Title  */}
      <section className="dataSetCard__titleContainer">
        <img
          src={require(`../../assets/tempPhotos/${dataSet.img}`)}
          alt={`Data set thumbnail ${dataSet.title}`}
        />
        <p>{`${dataSet.title.slice(0, 80)}`}</p>
      </section>

      {/* Description */}
      <section className="dataSetCard__descriptionContainer">
        <p>{`${dataSet.description.slice(0, 187)}...`}</p>
      </section>

      {/* Updates Frequency */}
      <section className="dataSetCard__updatesContainer">
        <div>
          <p>Last Update</p>
          <p>{dataSet.lastUpdate}</p>
        </div>
        <div>
          <p>Frequency</p>
          <p>{dataSet.frequency}</p>
        </div>
        <div>
          <p>Geography</p>
          <p>{dataSet.geography}</p>
        </div>
      </section>

      {/* Tags */}
      <section className="dataSetCard__tagsContainer">
        {dataSet.tags.map((tag, index) => (
          <div className="dataSetCard__tagContainer" key={`${tag.title}-${index}`}>
            <p>{tag}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DataSetCard;

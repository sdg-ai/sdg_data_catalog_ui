import TagsContainer from "./TagsContainer";
import { Link } from "react-router-dom";

const DataSetCard = ({ dataSet }) => {
  dataSet.id = "161561";
  return (
    <div className="dataSetCard">
      {/* Title  */}

      <Link className="dataSetCard__titleContainer" to={`/dataset/${dataSet.id}`}>
        <img
          src={require(`../assets/tempPhotos/${dataSet.img}`)}
          alt={`Data set thumbnail ${dataSet.title}`}
          loading="lazy"
        />
        <h3>
          {`${dataSet.title.slice(0, 80)}`}
          {dataSet.title.length > 80 && "..."}
        </h3>
      </Link>

      {/* Description */}
      <section className="dataSetCard__descriptionContainer">
        <p>
          {`${dataSet.description.slice(0, 187)}`}
          {dataSet.description.length > 189 && "..."}
        </p>
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
        <TagsContainer tags={dataSet.tags} />
      </section>
    </div>
  );
};

export default DataSetCard;

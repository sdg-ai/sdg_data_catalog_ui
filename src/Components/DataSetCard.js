import { Link } from "react-router-dom";

//Components
import TagsContainer from "./TagsContainer";

const DataSetCard = ({ dataSet }) => {
  return (
    <div className="datasetCard">
      {/* Title  */}

      <Link className="datasetCard__titleContainer" to={`/dataset/${dataSet?.id}`}>
        <div className="datasetCard__imgContainer">
          <img
            width={90}
            height={90}
            className="datasetCard__img"
            src={require(`../assets/tempPhotos/${
              dataSet.img ? dataSet.img : "tempDataSetImage1.jpg"
            }`)}
            alt={`Data set thumbnail ${dataSet?.title}`}
            loading="lazy"
          />
        </div>
        <div className="datasetCard__title">
          <h3>
            {`${dataSet.title.slice(0, 80)}`}
            {dataSet.title.length > 80 && "..."}
          </h3>
        </div>
      </Link>

      {/* Description */}
      <div className="datasetCard__descriptionContainer">
        <p>
          {`${dataSet.description.slice(0, 187)}`}
          {dataSet.description.length > 189 && "..."}
        </p>
      </div>

      {/* Updates Frequency */}
      <div className="datasetCard__updatesContainer">
        <div>
          <p>Last Update</p>
          <p>{dataSet.last_update}</p>
        </div>
        <div>
          <p>Frequency</p>
          <p>{dataSet.update_frequency}</p>
        </div>
        <div>
          <p>Geography</p>
          <p>{dataSet.geographic_coverage}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="datasetCard__tagsContainer">
        <TagsContainer tags={dataSet.keywords} />
      </div>
    </div>
  );
};

export default DataSetCard;

const PublicationsCard = ({ publication }) => {
  return (
    <section className="publicationsCard">
      <div className="publicationsCard__titleContainer">
        <p>{publication.title}</p>
      </div>
      <div className="publicationsCard__descriptionContainer">
        <p>
          {publication.description.slice(0, 187)}
          {publication.description.length > 187 && "..."}
        </p>
      </div>
      <div className="publicationsCard__authorsContainer">
        <p>By {publication.authors}</p>
      </div>
      <div className="publicationsCard__infoBanner">
        <div className="publicationsCard__info">
          <p>Published</p>
          <p>2017</p>
        </div>
        <div className="publicationsCard__info">
          <p>Citations</p>
          <p>2548</p>
        </div>
      </div>
      <div className="publicationsCard__linkContainer">
        <a href={publication.link} target="_blank" rel="noreferrer">
          <p>
            <i className="fa-solid fa-link"></i> Read Publication
          </p>
        </a>
      </div>
    </section>
  );
};

export default PublicationsCard;

//Components
import PublicationsCard from "./PublicationsCard";

const PublicationsCardsContainer = ({ publications, length = 3 }) => {
  const publicationsLimited = publications.slice(0, length);
  return (
    <section className="publicationsCardsContainer">
      {publicationsLimited.map((publication, index) => (
        <PublicationsCard publication={publication} key={`${publication.title} - ${index}`} />
      ))}
    </section>
  );
};

export default PublicationsCardsContainer;

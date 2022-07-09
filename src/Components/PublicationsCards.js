//Components
import PublicationsCard from "./PublicationsCard";

const PublicationsCards = ({ publications, length = 3 }) => {
  const publicationsLimited = publications.slice(0, length);
  return (
    <section className="cardsContainer">
      {publicationsLimited.map((publication, index) => (
        <PublicationsCard publication={publication} key={`${publication.title} - ${index}`} />
      ))}
    </section>
  );
};

export default PublicationsCards;

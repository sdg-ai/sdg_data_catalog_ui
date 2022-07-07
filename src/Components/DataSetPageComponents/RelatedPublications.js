import { publications } from "../../utils/tempDataArray";
import PublicationsCards from "../PublicationsCards";
import Title from "../Title";

const RelatedPublications = () => {
  return (
    <section className="generalSectionGrey">
      <section className="generalSectionGrey__container">
        <Title title="Related Publications" />
        <PublicationsCards publications={publications} />
      </section>
    </section>
  );
};

export default RelatedPublications;

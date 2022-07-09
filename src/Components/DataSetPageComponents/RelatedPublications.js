//Components
import PublicationsCards from "../PublicationsCards";
import Title from "../Title";

//TEMPORARY DATA
import { publications } from "../../utils/tempDataArray";

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

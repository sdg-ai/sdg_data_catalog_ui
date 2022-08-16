//Components
import PublicationsCardsContainer from "./PublicationsCardsContainer";
import Title from "../Title";

//TEMPORARY DATA
import { publications } from "../../utils/tempDataArray";

const RelatedPublicationsContainer = () => {
  return (
    <section className="generalSectionGrey">
      <section className="generalSectionGrey__container">
        <Title title="Related Publications" />
        <PublicationsCardsContainer publications={publications} />
      </section>
    </section>
  );
};

export default RelatedPublicationsContainer;

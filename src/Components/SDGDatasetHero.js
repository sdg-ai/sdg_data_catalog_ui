import TagsContainer from "./TagsContainer";
import UpdateTags from "./UpdateTags";

const tags = [
  "biofuel",
  "biogas",
  "biogas",
  "emissions",
  "hydropower",
  "photovoltaic",
  "renewable energy",
  "technology",
  "solar power",
  "such a long tag lorem ipsum dolor sit",
];

const SDGDatasetHero = ({ dataSetPage = false, logo, title, subTitle }) => {
  return (
    <section className="SDGDatasetHero">
      <section className="SDGDatasetHero__container">
        <section className="SDGDatasetHero__left">
          <img src={logo} alt={`SDG logo sdg-icon-01.svg`} loading="lazy" />
          <div>
            <h1>{title}</h1>
            <h1>{subTitle}</h1>
          </div>
          <p>
            {`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       
          `}
            {dataSetPage &&
              "Lorem ipsum dolorsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."}
          </p>
          {dataSetPage && (
            <section className="SDGDatasetHero__bttContainer">
              <button
                className="btt"
                onClick={() => window.open("https://pedrogoncal.com", "_blank")}
              >
                <i class="fa-solid fa-link"></i> Visit Website
              </button>
            </section>
          )}
        </section>
        <section className="SDGDatasetHero__right">
          {dataSetPage && <UpdateTags />}
          <h5>Related Tags</h5>
          <section className="SDGDatasetHero__tagsContainer">
            <TagsContainer tags={tags} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default SDGDatasetHero;

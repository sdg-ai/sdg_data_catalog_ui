import { useEffect, useState } from "react";

//Axios
import axios from "axios";

//React router
import { useParams } from "react-router-dom";

//Components
import TagsContainer from "./TagsContainer";
import UpdateTags from "./UpdateTags";

//Meta Wrapper
import Meta from "../Components/MetaWrapper";

import CircleLoader from "react-spinners/CircleLoader";

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
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  //TEMPORARY USE EFFECT
  useEffect(() => {
    if (!dataSetPage) setLoading(false);
  }, []);

  useEffect(() => {
    if (dataSetPage) {
      const fetchIndividualDataset = async () => {
        try {
          const res = await axios.get(
            `https://611ab28bc2bfd20017332822.mockapi.io/api/datasets/${id}`
          );
          setDataset(res.data);
          setLoading(false);
        } catch (error) {
          console.log("Something went wrong fetching individual dataset", error);
        }
      };

      fetchIndividualDataset();
    }
  }, [dataSetPage, id]);

  return (
    <>
      <section className="SDGDatasetHero">
        {loading ? (
          <div className="SDGDatasetHero__loader">
            <CircleLoader loading color="#00AAAA" size={200} />
          </div>
        ) : (
          <>
            <Meta title={`${title} - ${subTitle} || SDG Data Catalog`} />
            <div className="SDGDatasetHero__container">
              <div className="SDGDatasetHero__left">
                <div className="SDGDatasetHero__imgContainer">
                  <img
                    src={logo}
                    alt={`SDG logo sdg-icon-01.svg`}
                    loading="lazy"
                    className="SDGDatasetHero__img"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="SDGDatasetHero__titleContainer">
                  <h1>{dataSetPage ? dataset.title : title}</h1>
                  <h1>{subTitle}</h1>
                </div>
                <div className="SDGDatasetHero__description">
                  <p>
                    {dataSetPage
                      ? dataset.description
                      : `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                  </p>
                </div>
                {dataSetPage && (
                  <div className="SDGDatasetHero__bttContainer">
                    <button
                      className="btt"
                      onClick={() => window.open(`${dataset.data_access_link}`, "_blank")}
                    >
                      <i className="fa-solid fa-link"></i> Visit Website
                    </button>
                  </div>
                )}
              </div>
              <div className="SDGDatasetHero__right">
                <div>
                  {dataSetPage && (
                    <UpdateTags
                      lastUpdate={dataset.last_update}
                      updateFrequency={dataset.update_frequency}
                      nextUpdate="N/A"
                      geographicCoverage={dataset.geographic_coverage}
                    />
                  )}
                </div>
                <div className="SDGDatasetHero__relatedTags">
                  <p className="SDGDatasetHero__relatedTags--title">Related Tags</p>
                  <div className="SDGDatasetHero__tagsContainer">
                    <TagsContainer tags={dataSetPage ? dataset?.keywords : tags} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default SDGDatasetHero;

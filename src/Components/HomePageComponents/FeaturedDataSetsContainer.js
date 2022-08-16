import { useEffect, useState } from "react";

//Components
import DataSetCardsContainer from "../DataSetCardsContainer";
import Title from "../Title";

//Axios
import axios from "axios";

const FeaturedDataSetsContainer = () => {
  const [featuredDatasets, setFeaturedDatasets] = useState([]);
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axios.get(
          "https://611ab28bc2bfd20017332822.mockapi.io/api/featured-datasets"
        );

        setFeaturedDatasets(res.data);
      } catch (error) {
        console.log("Something went wrong fetching the featured datasets", error);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="featuredDataSetsContainer generalSectionGrey">
      <div className="featuredDataSetsContainer__container generalSectionGrey__container">
        <Title
          title="Featured Datasets"
          description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor."
        />
        <DataSetCardsContainer dataSets={featuredDatasets} />
      </div>
    </section>
  );
};

export default FeaturedDataSetsContainer;

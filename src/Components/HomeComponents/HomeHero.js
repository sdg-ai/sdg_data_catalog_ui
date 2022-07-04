import React, { useState } from "react";

import CountUp from "react-countup";

const HomeHero = () => {
  const [dataSetQuantity, setDataSetQuantity] = useState(3926);

  return (
    <div className="hero">
      <div className="hero__container">
        <section className="hero__title">
          <h1>SDG Data Catalog</h1>
        </section>
        <section className="hero__description">
          <h3>
            Support researchers and innovators to advance the 3030 agenda with relevant and
            real-time datasets.
          </h3>
        </section>
        <section className="hero__input">
          <form>
            <i className="fa-solid fa-magnifying-glass navBar__searchIcon searchIcon"></i>
            <input placeholder="Search for datasets & keywords" />
          </form>
        </section>
        <section className="hero__dataSets">
          <h5>
            <CountUp end={dataSetQuantity} duration={2.5} separator="," delay={1} />
            {` SDG relevant datasets available`}
          </h5>
        </section>
      </div>
    </div>
  );
};

export default HomeHero;

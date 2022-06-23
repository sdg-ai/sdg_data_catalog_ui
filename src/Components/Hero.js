import React, { useState } from "react";

const Hero = () => {
  const [dataSetQuantity, setDataSetQuantity] = useState(3926);

  return (
    <div className="hero">
      <div className="hero__container">
        <section className="hero__title">
          <h1>SDG Data Catalog</h1>
        </section>
        <section className="hero__description">
          <h2>
            Support researchers and innovators to advance the 2030 agenda with relevant and
            real-time datasets.
          </h2>
        </section>
        <section className="hero__input">
          <form>
            <i className="fa-solid fa-magnifying-glass navBar__searchIcon searchIcon"></i>
            <input placeholder="Search for datasets & keywords" />
          </form>
        </section>
        <section className="hero__dataSets">
          <h5>{`${dataSetQuantity.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })} SDG relevant datasets available`}</h5>
        </section>
      </div>
    </div>
  );
};

export default Hero;

const DropDownFiltersContainer = () => {
  return (
    <section className="dropDownFiltersContainer">
      <div className="dropDownFiltersContainer__container">
        <section className="dropDownFiltersContainer__left">
          <div className="custom-select">
            <select
              className="mainInputText select dropDownFiltersContainer__select"
              defaultValue="All indicators"
            >
              <option value="All indicators" disabled hidden>
                All indicators
              </option>
              <option value="indicator 1">Indicator 1</option>
              <option value="indicator 2">Indicator 2</option>
              <option value="indicator 3">Indicator 3</option>
            </select>
          </div>
          <div className="custom-select">
            {" "}
            <select className="mainInputText select dropDownFiltersContainer__select" defaultValue="All regions">
              <option value="All regions" disabled hidden>
                All regions
              </option>
              <option value="Region 1">Region 1</option>
              <option value="Region 2">Region 2</option>
              <option value="Region 3">Region 3</option>
            </select>
          </div>
        </section>
        <section className="dropDownFiltersContainer__right">
          <div className="custom-select">
            {" "}
            <select
              className="mainInputText select dropDownFiltersContainer__select"
              defaultValue="Most popular"
            >
              <option value="Most popular" disabled hidden>
                Most popular
              </option>
              <option value="Popular 1">Popular 1</option>
              <option value="Popular 2">Popular 2</option>
              <option value="Popular 3">Popular 3</option>
            </select>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DropDownFiltersContainer;

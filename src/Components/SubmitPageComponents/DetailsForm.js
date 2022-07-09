const DetailsForm = ({ values, handleInputChange, setInputType, inputType }) => {
  return (
    <div>
      <section className="submitDatasetForm__personalDetails">
        <h5>Your Details</h5>
        <input
          className="mainInputText"
          type="text"
          placeholder="Enter your name*"
          value={values.name}
          onChange={handleInputChange}
          name="name"
          required
        />

        <input
          className="mainInputText"
          type="email"
          placeholder="Enter your email*"
          value={values.email}
          onChange={handleInputChange}
          name="email"
          required
        />
      </section>
      {/* Dataset Details */}
      <section className="submitDatasetForm__datasetDetails">
        <h5>Dataset Details</h5>
        <input
          className="mainInputText"
          type="text"
          placeholder="Enter Dataset Title*"
          value={values.datasetTitle}
          onChange={handleInputChange}
          name="datasetTitle"
          required
        />
        <input
          className="mainInputText"
          type="text"
          placeholder="Enter Website Link*"
          value={values.websiteLink}
          onChange={handleInputChange}
          name="websiteLink"
          required
        />
        <div className="submitDatasetForm__datasetDetails--horizontal">
          <input
            className="mainInputText "
            placeholder="Last Update*"
            type={inputType}
            onFocus={() => setInputType("date")}
            onBlur={() => {
              if (values.lastUpdate.length > 1) return;
              setInputType("text");
            }}
            value={values.lastUpdate}
            onChange={handleInputChange}
            name="lastUpdate"
            required
          />
          <i className="fa-solid fa-calendar"></i>
          <select
            className="mainInputText select"
            value={values.updateFrequency}
            onChange={handleInputChange}
            name="updateFrequency"
            required
            defaultValue="Update Frequency*"
          >
            <option value="Update Frequency*" disabled hidden>
              Update Frequency*
            </option>
            <option value="Option 2">1 Month</option>
            <option value="Option 3">3 Months</option>
            <option value="Option 4">6 Months</option>
          </select>
        </div>
        <select
          className="mainInputText select"
          value={values.geography}
          onChange={handleInputChange}
          defaultValue="Choose related Region / Geography*"
          name="geography"
          required
        >
          <option value="Choose related Region / Geography*" disabled hidden>
            Choose related Region / Geography*
          </option>
          <option value="Option 2">North America</option>
          <option value="Option 3">South America</option>
          <option value="Option 4">Europe</option>
          <option value="Option 4">North Africa</option>
          <option value="Option 4">Desert Africa</option>
          <option value="Option 4">South Africa</option>
          <option value="Option 4">Siberia</option>
          <option value="Option 4">South Asia</option>
          <option value="Option 4">East Asia</option>
        </select>
      </section>
    </div>
  );
};

export default DetailsForm;

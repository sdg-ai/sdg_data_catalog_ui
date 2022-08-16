import { useEffect, useState } from "react";

//Components
import SubmitConfirmation from "../SubmitConfirmation";
import AdditionalInfoForm from "./AdditionalInfoForm";
import DetailsForm from "./DetailsForm";
import KeywordsForm from "./KeywordsForm";
import RelevantSDGsForm from "./RelevantSDGsForm";

const initialValues = {
  name: "",
  email: "",
  title: "",
  data_access_link: "",
  last_update: "",
  update_frequency: undefined,
  geographic_coverage: undefined,
  sdg: [],
  keywords: "",
  owner: "",
  doi: "",
  description: "",
  additionalInfo: "",
};

const SubmitDatasetForm = () => {
  const [inputType, setInputType] = useState("text");
  const [bttDisabled, setBttDisabled] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagsSuggestion, setTagsSuggestion] = useState([
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
  ]);
  const [confirmation, setConfirmation] = useState(false);
  const [values, setValues] = useState(initialValues);

  //Togglers state
  const [relevantSDGToggle, setRelevantSDGToggle] = useState(false);
  const [keywordsToggle, setKeywordsToggle] = useState(false);
  const [additionalInfoToggle, setAdditionalInfoToggle] = useState(false);

  //Function that adds each selected sdg to the sdg array
  const handleGoalsSelection = (e) => {
    const { name } = e.target;
    let newArray = [...values.sdg, name];
    if (values.sdg.includes(name)) {
      newArray = newArray.filter((sdg) => sdg !== name);
    }

    setValues({
      ...values,
      sdg: newArray,
    });
  };

  const handleTagRemove = (keyword) => {
    const newTags = tags.filter((tag) => tag !== keyword);
    setTags(newTags);
  };

  const handleTagsSuggestionRemove = (keyword) => {
    const newTags = tagsSuggestion.filter((tag) => tag !== keyword);
    setTagsSuggestion(newTags);

    if (tags.some((tag) => tag === keyword.toLowerCase())) return;
    setTags((prev) => [...prev, keyword]);
  };

  const handleAddTag = (keyword) => {
    setTags((prev) => [...prev, keyword.toLowerCase()]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(true);
  };

  const disableSubmitButton = () => {
    setBttDisabled(true);
  };

  const enableSubmitButton = () => {
    setBttDisabled(false);
  };

  return (
    <div>
      {confirmation ? (
        <SubmitConfirmation />
      ) : (
        <div className="submitDatasetForm">
          <div className="submitDatasetForm__container">
            {/* Title */}
            <section className="submitDatasetForm__titleContainer">
              <h1>Submit a dataset</h1>
              <p>Please fill the form below to submit a dataset</p>
            </section>
            {/* Form */}
            <form className="submitDatasetForm__form" onSubmit={handleSubmit}>
              {/* Details */}
              <section className="submitDatasetForm__details">
                <DetailsForm
                  values={values}
                  handleInputChange={handleInputChange}
                  setInputType={setInputType}
                  inputType={inputType}
                />
              </section>

              {/* SDG Goals Dropdown */}

              <section className="submitDatasetForm__SDGGoals submitDatasetForm__containerSeparator">
                <div
                  onClick={() => setRelevantSDGToggle(!relevantSDGToggle)}
                  className="submitDatasetForm__optionalTitle"
                >
                  {relevantSDGToggle ? (
                    <i className="fa-solid fa-circle-minus"></i>
                  ) : (
                    <i className="fa-solid fa-circle-plus"></i>
                  )}
                  <h5 className="submitDatasetForm__SDGGoals--title">
                    Choose relevant SDGs (optional)
                  </h5>
                </div>
                {relevantSDGToggle && (
                  <RelevantSDGsForm handleGoalsSelection={handleGoalsSelection} />
                )}
              </section>

              {/* Keywords dropdown */}

              <section className="submitDatasetForm__keywordsContainer submitDatasetForm__containerSeparator">
                <div
                  onClick={() => setKeywordsToggle(!keywordsToggle)}
                  className="submitDatasetForm__optionalTitle"
                >
                  {keywordsToggle ? (
                    <i className="fa-solid fa-circle-minus"></i>
                  ) : (
                    <i className="fa-solid fa-circle-plus"></i>
                  )}
                  <h5>Choose tags / keyword (optional)</h5>
                </div>
                <div className="submitDatasetForm__keywords">
                  {keywordsToggle && (
                    <KeywordsForm
                      values={values}
                      handleInputChange={handleInputChange}
                      handleTagRemove={handleTagRemove}
                      handleTagsSuggestionRemove={handleTagsSuggestionRemove}
                      tags={tags}
                      handleAddTag={handleAddTag}
                      disableSubmitButton={disableSubmitButton}
                      enableSubmitButton={enableSubmitButton}
                      tagsSuggestion={tagsSuggestion}
                    />
                  )}
                </div>
              </section>

              {/* Additional Information dropdown */}

              <section className="submitDatasetForm__additionalInfo submitDatasetForm__containerSeparator">
                <div
                  onClick={() => setAdditionalInfoToggle(!additionalInfoToggle)}
                  className="submitDatasetForm__optionalTitle"
                >
                  {additionalInfoToggle ? (
                    <i className="fa-solid fa-circle-minus"></i>
                  ) : (
                    <i className="fa-solid fa-circle-plus"></i>
                  )}
                  <h5>Additional info & resources (optional)</h5>
                </div>
                {additionalInfoToggle && (
                  <AdditionalInfoForm values={values} handleInputChange={handleInputChange} />
                )}
              </section>
              <section className="submitDatasetForm__requiredFields submitDatasetForm__containerSeparator">
                <p>*required fields</p>
              </section>
              <section className="submitDatasetForm__bttContainer">
                <button disabled={bttDisabled} className="btt">
                  Submit now
                </button>
              </section>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitDatasetForm;

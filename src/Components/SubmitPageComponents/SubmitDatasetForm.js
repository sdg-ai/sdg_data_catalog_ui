import React, { useState } from "react";
import { dataSets } from "../../utils/tempDataArray";
import TagsContainer from "../TagsContainer";

//TEMP tags for suggestions

const SubmitDatasetForm = () => {
  const [type, setType] = useState("text");
  const [lastUpdate, setLastUpdate] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tags, setTags] = useState([
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

  console.log(tags);

  /*
TODO - Add key words by pressing the tags but not allowing repeated ones, remove from the list of tags
*/
  const handleSuggestedKeywordPress = (keyword) => {
    const newTags = tags.filter((tag) => tag !== keyword);
    setTags(newTags);
    setKeywords((last) => [...last, ` ${keyword}`]);
  };

  return (
    <section className="submitDatasetForm">
      <section className="submitDatasetForm__container">
        {/* Title */}
        <section className="submitDatasetForm__titleContainer">
          <h1>Submit a dataset</h1>
          <p>Please fill the form below to submit a dataset</p>
        </section>
        {/* Form */}
        <form className="submitDatasetForm__form">
          {/* Your Details*/}
          <section className="submitDatasetForm__personalDetails">
            <h5>Your Details</h5>
            <input className="mainInputText" type="text" placeholder="Enter your name*" />
            <input className="mainInputText" type="text" placeholder="Enter your email*" />
          </section>
          {/* Dataset Details */}
          <section className="submitDatasetForm__datasetDetails">
            <h5>Dataset Details</h5>
            <input className="mainInputText" type="text" placeholder="Enter Dataset Title*" />
            <input className="mainInputText" type="text" placeholder="Enter Website Link*" />
            <div className="submitDatasetForm__datasetDetails--horizontal">
              <input
                className="mainInputText "
                id="horizontalForm"
                placeholder="Last Update*"
                type={type}
                onFocus={() => setType("date")}
                onBlur={() => setType("text")}
                value={lastUpdate}
                onChange={(e) => setLastUpdate(e.target.value)}
              />
              <i class="fa-solid fa-calendar"></i>
              <select className="mainInputText select">
                <option value="Option 1" disabled selected hidden>
                  Update Frequency*
                </option>
                <option value="Option 2">1 Month</option>
                <option value="Option 3">3 Months</option>
                <option value="Option 4">6 Months</option>
              </select>
            </div>
            <select className="mainInputText select">
              <option value="Option 1" disabled selected hidden>
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
          {/* SDG Goals */}
          <section className="submitDatasetForm__SDGGoals">
            <h5 className="submitDatasetForm__SDGGoals--title">
              Choose the SDGs, that are the best match for this dataset
            </h5>
            <div className="submitDatasetForm__checkboxContainer">
              <div>
                <label className="checkboxContainer">
                  Goal 1
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>No Poverty</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 2
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Zero Hunger</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 3
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Good Health & Wellbeing</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 4
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Quality Education</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 5
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Gender Equality</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 6
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Clean Water & Sanitation</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 7
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Affordable & Clean Energy</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 8
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Decent Work & Economic Growth</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 9
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Industry, Innovation & Infrastructure</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 10
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Reduced Inequalities</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 11
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Sustainable Cities & Communities</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 12
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Responsible Consumption & Production</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 13
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Climate Action</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 14
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Life Below Water</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 15
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Life on Land</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 16
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Peace, Justice & Strong Institutions</p>
              </div>
              <div>
                <label className="checkboxContainer">
                  Goal 17
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <p>Partnership for the Goals</p>
              </div>
            </div>
          </section>
          <section className="submitDatasetForm__optionalFields">
            <h5>Additional information (optional)</h5>
            <select className="mainInputText select">
              <option value="Option 1" disabled selected hidden>
                Sub Goals / Indicators
              </option>
              <option value="Option 2">Indicator 1</option>
              <option value="Option 3">Indicator 2</option>
              <option value="Option 4">Indicator 3</option>
            </select>

            <textarea
              type="text"
              placeholder="Keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <p>Suggested Keywords</p>
            <TagsContainer
              tags={tags}
              handleSuggestedKeywordPress={handleSuggestedKeywordPress}
              form
            />
            <textarea type="text" placeholder="Description" />
            <input className="mainInputText" type="text" placeholder="Owner / License" />
            <input className="mainInputText" type="text" placeholder="Dataset DOI" />
          </section>
          <section className="submitDatasetForm__requiredFields">
            <p>*required fields</p>
          </section>
          <section className="submitDatasetForm__bttContainer">
            <button className="btt">Submit now</button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default SubmitDatasetForm;

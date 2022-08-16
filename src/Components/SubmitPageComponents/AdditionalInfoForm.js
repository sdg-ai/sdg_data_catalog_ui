const AdditionalInfoForm = ({ values, handleInputChange }) => {
  return (
    <div>
      <input
        className="mainInputText"
        type="text"
        placeholder="Owner / License"
        value={values.owner}
        onChange={handleInputChange}
        name="owner"
      />
      <input
        className="mainInputText"
        type="text"
        placeholder="Dataset DOI"
        value={values.doi}
        onChange={handleInputChange}
        name="doi"
      />
      <textarea
        type="text"
        placeholder="Description"
        value={values.description}
        onChange={handleInputChange}
        name="description"
      />
      <textarea
        type="text"
        placeholder="Provide any additional info such as links to related publications, github, methodology, etc."
        value={values.additionalInfo}
        onChange={handleInputChange}
        name="additionalInfo"
      />
    </div>
  );
};

export default AdditionalInfoForm;

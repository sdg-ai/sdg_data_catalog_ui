//Components
import TagsContainer from "../TagsContainer";

const KeywordsForm = ({ handleSuggestedKeywordPress, tags, values, handleInputChange }) => {
  return (
    <div>
      <textarea
        type="text"
        placeholder="Keywords"
        value={values.keywords}
        onChange={handleInputChange}
        name="keywords"
      />
      <p>Suggested Keywords</p>
      <TagsContainer tags={tags} handleSuggestedKeywordPress={handleSuggestedKeywordPress} form />
    </div>
  );
};

export default KeywordsForm;

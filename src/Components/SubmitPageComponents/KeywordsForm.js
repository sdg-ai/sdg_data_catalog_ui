import React, { useCallback, useRef, useState } from "react";

//Components
import TagsContainer from "../TagsContainer";

const KeywordsForm = ({
  handleTagRemove,
  handleAddTag,
  tags,
  handleTagsSuggestionRemove,
  disableSubmitButton,
  enableSubmitButton,
  tagsSuggestion,
}) => {
  const [keyword, setKeyword] = useState("");
  const [placeholder, setPlaceholder] = useState("Keywords");

  const addTag = () => {
    if (keyword.length < 1) {
      setPlaceholder("Please enter a keyword");
      setTimeout(() => {
        setPlaceholder("Keywords");
      }, 1500);
      return;
    }
    if (tags.some((tag) => tag === keyword.toLowerCase())) {
      setKeyword("");
      setPlaceholder("Keyword already exists");
      setTimeout(() => {
        setPlaceholder("Keywords");
      }, 1500);
      return;
    }

    handleAddTag(keyword);
    setKeyword("");
  };

  return (
    <div className="keywordForm">
      <p>
        Enter a keyword and press Enter or + to add it to the list, or click on any of the suggested
        keywords. Click the keyword to remove it.
      </p>
      <div
        id="keywordForm"
        className="keywordForm__inputContainer"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTag();
          }
        }}
      >
        <input
          className="mainInputText"
          type="text"
          placeholder={placeholder}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          name="keywords"
          onFocus={disableSubmitButton}
          onBlur={enableSubmitButton}
        />
        <i className="fa-solid fa-plus" onClick={addTag}></i>
      </div>
      <TagsContainer tags={tags} handleTagRemove={handleTagRemove} form selectedTag />
      {tagsSuggestion.length > 0 && <p>Suggested keywords</p>}
      <TagsContainer tags={tagsSuggestion} handleTagRemove={handleTagsSuggestionRemove} form />
    </div>
  );
};

export default KeywordsForm;

const TagsContainer = ({ tags, handleTagRemove, form, selectedTag }) => {
  return (
    <div className="tagsContainer">
      {tags?.map((tag, index) => (
        <div
          onClick={() => {
            form && handleTagRemove(tag);
          }}
          className={`tagsContainer__tag ${selectedTag ? "tagsContainer--selected" : ""}`}
          key={`${tag}-${index}`}
        >
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default TagsContainer;

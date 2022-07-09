const TagsContainer = ({ tags, handleSuggestedKeywordPress, form }) => {
  return (
    <section className="tagsContainer">
      {tags.map((tag, index) => (
        <div
          onClick={() => {
            form && handleSuggestedKeywordPress(tag);
          }}
          className="tagsContainer__tag"
          key={`${tag}-${index}`}
        >
          <p>{tag}</p>
        </div>
      ))}
    </section>
  );
};

export default TagsContainer;

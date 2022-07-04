import React from "react";

const TagsContainer = ({ tags }) => {
  return (
    <section className="tagsContainer">
      {tags.map((tag, index) => (
        <div className="tagsContainer__tag" key={`${tag.title}-${index}`}>
          <p>{tag}</p>
        </div>
      ))}
    </section>
  );
};

export default TagsContainer;

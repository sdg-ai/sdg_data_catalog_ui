import { Helmet } from "react-helmet";

const MetaWrapper = ({ title, description, keyword, author }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <meta name="author" content={author} />
      </Helmet>
    </div>
  );
};

MetaWrapper.defaultProps = {
  title: "SDG Data Catalog || AI for Good",
  description: "Sustainable Development Goals catalog by AI for Good Foundation",
  keyword: "Sustainable Development Goals, SDG, AI for Good",
  author: "AI for Good Foundation",
};

export default MetaWrapper;

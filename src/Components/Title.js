const Title = ({ title, description }) => {
  return (
    <section className="title">
      <h2>{title}</h2>
      <h3>{description}</h3>
    </section>
  );
};

export default Title;

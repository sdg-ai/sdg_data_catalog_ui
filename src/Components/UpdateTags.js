const UpdateTags = ({ lastUpdate, updateFrequency, nextUpdate, geographicCoverage }) => {
  return (
    <section className="updateTags">
      <div>
        <h5>Last Update</h5>
        <p>{lastUpdate}</p>
      </div>
      <div>
        <h5>Next Update</h5>
        <p>{nextUpdate}</p>
      </div>
      <div>
        <h5>Frequency</h5>
        <p>{updateFrequency}</p>
      </div>
      <div>
        <h5>Geography</h5>
        <p>{geographicCoverage}</p>
      </div>
    </section>
  );
};

export default UpdateTags;

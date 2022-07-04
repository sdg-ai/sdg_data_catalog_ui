import CircleLoader from "react-spinners/CircleLoader";

const MainLoader = () => {
  return (
    <section
      style={{
        with: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircleLoader loading color="#00AAAA" size={200} />
    </section>
  );
};

export default MainLoader;

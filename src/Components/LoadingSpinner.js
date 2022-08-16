//React spinner
import CircleLoader from "react-spinners/CircleLoader";

const LoadingSpinner = () => {
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

export default LoadingSpinner;

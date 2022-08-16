//Components
import Navbar from "../Components/NavFooter/Navbar";
import SubmitDatasetForm from "../Components/SubmitPageComponents/SubmitDatasetForm";

//Meta Wrapper
import Meta from "../Components/MetaWrapper";

const SubmitDatasetPage = () => {
  return (
    <div>
      <Meta title="Submit dataset || SDG Data Catalog" />
      <Navbar />
      <SubmitDatasetForm />
    </div>
  );
};

export default SubmitDatasetPage;

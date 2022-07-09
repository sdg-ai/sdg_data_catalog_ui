//React router
import { Link } from "react-router-dom";

//Assets
import confirmationCircle from "../assets/logos/check-circle 1.svg";

const SubmitConfirmation = () => {
  return (
    <main className="submitConfirmation">
      <section className="submitConfirmation__container">
        <img src={confirmationCircle} alt="confirmation logo" />
        <h1>Dataset submitted</h1>
        <p>Your dataset was submitted successfully.</p>
        <p>Thank you for your support</p>

        <Link to="/">
          <button className="btt">Back to home page</button>
        </Link>
      </section>
    </main>
  );
};

export default SubmitConfirmation;

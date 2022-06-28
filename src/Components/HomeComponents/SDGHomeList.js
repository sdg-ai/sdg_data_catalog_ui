import { SDGGoalsList } from "../../utils/SDGGoalsList";
import SDGGoalCard from "./SDGGoalCard";

const SDGHomeList = () => {
  return (
    <section className="SDGHomeList">
      <section className="SDGHomeList__container">
        <section className="SDGHomeList__titleContainer">
          <h2>Find SDG related datasets</h2>
          <h3>
            Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor.
          </h3>
        </section>

        <section className="SDGHomeList__goals">
          {SDGGoalsList.map((goal) => (
            <SDGGoalCard goal={goal} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default SDGHomeList;

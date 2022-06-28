import { SDGGoalsList } from "../../utils/SDGGoalsList";
import Title from "../Title";
import SDGGoalCard from "./SDGGoalCard";

const SDGHomeList = () => {
  return (
    <section className="SDGHomeList">
      <section className="SDGHomeList__container">
        <Title
          title="Find SDG related datasets"
          description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor."
        />

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

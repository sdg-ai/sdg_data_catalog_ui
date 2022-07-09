//Components
import Title from "../Title";
import SDGGoalCard from "./SDGGoalCard";

//Goals List
import { SDGGoalsList } from "../../utils/SDGGoalsList";

const SDGGoalsHome = () => {
  return (
    <section className="SDGHomeHome">
      <section className="SDGHomeHome__container">
        <Title
          title="Find SDG related datasets"
          description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor."
        />

        <section className="SDGHomeHome__goals">
          {SDGGoalsList.map((goal, index) => (
            <SDGGoalCard goal={goal} key={`${goal.title} - ${index}`} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default SDGGoalsHome;

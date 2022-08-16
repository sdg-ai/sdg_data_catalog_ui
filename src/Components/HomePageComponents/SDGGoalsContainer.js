//Components
import Title from "../Title";
import SDGGoalCard from "./SDGGoalCard";

//Goals List
import { SDGGoalsList } from "../../utils/SDGGoalsList";

const SDGGoalsContainer = () => {
  return (
    <section className="SDGGoalsContainer">
      <div className="SDGGoalsContainer__container">
        <Title
          title="Find SDG related datasets"
          description="Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor."
        />

        <div className="SDGGoalsContainer__goals">
          {SDGGoalsList.map((goal, index) => (
            <SDGGoalCard goal={goal} key={`${goal.title} - ${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGGoalsContainer;

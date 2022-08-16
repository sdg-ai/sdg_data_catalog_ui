//React Router
import { Link } from "react-router-dom";

const SDGGoalCard = ({ goal }) => {
  const urlParam = goal.title.toLowerCase().replace(/ /g, "");

  return (
    <Link to={`sdg/${urlParam}`} className="SDGGoalCard">
      <div className="SDGGoalCard__imgContainer">
        <img
          src={require(`../../assets/logos/${goal.src}`)}
          alt={`SDG logo ${goal.title}`}
          loading="lazy"
          width={60}
          height={60}
        />
      </div>
      <div className="SDGGoalCard__textContainer">
        <h4>{goal.title}</h4>
        <p>{goal.goal}</p>
      </div>
    </Link>
  );
};

export default SDGGoalCard;

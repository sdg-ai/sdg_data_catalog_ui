const SDGGoalCard = ({ goal }) => {
  return (
    <div className="SDGGoalCard">
      <div className="SDGGoalCard__imgContainer">
        <img src={require(`../../assets/logos/${goal.src}`)} alt={`SDG logo ${goal.title}`} />
      </div>
      <div className="SDGGoalCard__textContainer">
        <h4>{goal.title}</h4>
        <p>{goal.goal}</p>
      </div>
    </div>
  );
};

export default SDGGoalCard;

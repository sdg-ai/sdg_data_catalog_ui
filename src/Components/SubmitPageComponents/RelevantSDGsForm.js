const RelevantSDGsForm = ({ handleGoalsSelection }) => {
  return (
    <div>
      <div className="submitDatasetForm__checkboxContainer">
        <div>
          <label className="checkboxContainer">
            Goal 1
            <input type="checkbox" name="goal1" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>No Poverty</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 2
            <input type="checkbox" name="goal2" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Zero Hunger</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 3
            <input type="checkbox" name="goal3" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Good Health & Wellbeing</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 4
            <input type="checkbox" name="goal4" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Quality Education</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 5
            <input type="checkbox" name="goal5" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Gender Equality</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 6
            <input type="checkbox" name="goal6" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Clean Water & Sanitation</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 7
            <input type="checkbox" name="goal7" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Affordable & Clean Energy</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 8
            <input type="checkbox" name="goal8" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Decent Work & Economic Growth</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 9
            <input type="checkbox" name="goal9" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Industry, Innovation & Infrastructure</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 10
            <input type="checkbox" name="goal10" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Reduced Inequalities</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 11
            <input type="checkbox" name="goal11" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Sustainable Cities & Communities</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 12
            <input type="checkbox" name="goal12" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Responsible Consumption & Production</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 13
            <input type="checkbox" name="goal13" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Climate Action</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 14
            <input type="checkbox" name="goal14" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Life Below Water</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 15
            <input type="checkbox" name="goal15" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Life on Land</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 16
            <input type="checkbox" name="goal16" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Peace, Justice & Strong Institutions</p>
        </div>
        <div>
          <label className="checkboxContainer">
            Goal 17
            <input type="checkbox" name="goal17" onChange={handleGoalsSelection} />
            <span className="checkmark"></span>
          </label>
          <p>Partnership for the Goals</p>
        </div>
      </div>
    </div>
  );
};

export default RelevantSDGsForm;

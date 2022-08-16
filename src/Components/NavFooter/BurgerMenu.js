import React from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <div className="burgerMenu">
      <input type="checkbox" className="burgerMenu__checkbox" id="navi-toggle" />
      <label className="burgerMenu__button" htmlFor="navi-toggle">
        <span className="burgerMenu__icon"></span>
      </label>

      <div className="burgerMenu__background"></div>

      <nav className="burgerMenu__nav">
        <ul className="burgerMenu__list">
          <li className="burgerMenu__item">
            <Link to="/" className="burgerMenu__link">
              Home
            </Link>
          </li>
          <li className="burgerMenu__item">
            <Link to="/methodology" className="burgerMenu__link">
              Methodology
            </Link>
          </li>
          <li className="burgerMenu__item">
            <Link to="/submit-dataset" className="burgerMenu__link">
              Submit a dataset
            </Link>
          </li>
          <li className="burgerMenu__item">
            <Link to="/search-results" className="burgerMenu__link">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;

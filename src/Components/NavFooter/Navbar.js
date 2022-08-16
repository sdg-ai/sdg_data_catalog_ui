import { useState } from "react";

//Router
import { Link } from "react-router-dom";

//Assets
import mainLogo from "../../assets/logos/logo.svg";

//Components
import SearchBar from "../SearchBar";
import BurgerMenu from "./BurgerMenu";

const Navbar = ({ transparent }) => {
  const [searchEnabled, setSearchEnabled] = useState(false);

  const handleBlur = () => {
    setSearchEnabled(false);
  };

  return (
    <nav className={`navBar ${transparent && "navBar--transparent"}`}>
      <div className="navBar__titleContainer">
        <Link to="/" className="navBar__logoContainer">
          <img
            className="navBar__logo"
            src={mainLogo}
            alt="SDG data catalog"
            loading="lazy"
            width={60}
            height={60}
          />
        </Link>
        <div className={`navBar__title ${transparent && "navBar__title--transparent"}`}>
          <p className="navBar__title--bold">SDG</p>
          <p>Data Catalog</p>
        </div>
      </div>
      <div className="navBar__menuContainer">
        <Link to="/methodology">
          <ul>
            <li className={`${transparent && "liTransparent"}`}>Methodology</li>
          </ul>
        </Link>

        <Link to="/submit-dataset">
          <ul>
            <li className={`${transparent && "liTransparent"}`}>Submit a dataset</li>
          </ul>
        </Link>
        <Link to="/methodology">
          <ul>
            <li className={`${transparent && "liTransparent"}`}>About</li>
          </ul>
        </Link>

        <i
          onClick={() => setSearchEnabled(!searchEnabled)}
          className={`fa-solid fa-magnifying-glass navBar__searchIcon searchIcon ${
            transparent && "searchIcon--transparent"
          }`}
        ></i>
      </div>
      <menu className="navBar__menu">
        <BurgerMenu />
      </menu>

      {searchEnabled && <SearchBar transparent={transparent} handleBlur={handleBlur} />}
    </nav>
  );
};

export default Navbar;

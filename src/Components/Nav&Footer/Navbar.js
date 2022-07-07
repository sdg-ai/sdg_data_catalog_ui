//Router
import { Link } from "react-router-dom";

//Assets
import mainLogo from "../../assets/logos/Logo.png";

const Navbar = ({ transparent }) => {
  return (
    <nav className={`navBar ${transparent && "navBar--transparent"}`}>
      <section className="navBar__titleContainer">
        <Link to="/">
          <img src={mainLogo} alt="SDG data catalog" loading="lazy" />
        </Link>
        <div className={`navBar__title ${transparent && "navBar__title--transparent"}`}>
          <p className="navBar__title--bold">SDG</p>
          <p>Data Catalog</p>
        </div>
      </section>
      <section className="navBar__menuContainer">
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
        <i
          className={`fa-solid fa-magnifying-glass navBar__searchIcon searchIcon ${
            transparent && "searchIcon--transparent"
          }`}
        ></i>
      </section>
      <section className="navBar__menu">
        <i className="fa-solid fa-bars"></i>
      </section>
    </nav>
  );
};

export default Navbar;

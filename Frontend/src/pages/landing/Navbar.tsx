import { IoSearch } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  custom-navbar px-5 py-4">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo-light.svg" alt="logo" className="logo" />
        </a>

        {/* Category Button */}
        <button className="btn category-btn p-2 px-3 ">
          <TbCategory className="fs-5" /> Category
        </button>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* ✅ FIXED MENU */}
          <ul className="ms-auto me-auto navbar-nav d-flex flex-column flex-lg-row gap-2 gap-lg-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Demos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Pages
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link" to="/">
                Accounts
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Megamenu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            {/* Search */}
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <span className="search-icon">
                <IoSearch />
              </span>
            </div>

            {/* Profile */}
            <img src="/profile.jpg" className="profile-img" alt="profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

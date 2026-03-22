import { Link } from "react-router-dom";
const Sidebar = ({ open }: any) => {
  return (
    <div>
      <ul className="list-unstyled p-3">
        <li>{open ? "D" : "Dashboard"}</li>

        <li>
          <Link to="/" className="text-white text-decoration-none">
            {open ? "D" : "Dashboard"}
          </Link>
        </li>

        <li>
          <Link to="/users" className="text-white text-decoration-none">
            {open ? "U" : "Users"}
          </Link>
        </li>

        <li>
          <Link to="/settings" className="text-white text-decoration-none">
            {open ? "S" : "Settings"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

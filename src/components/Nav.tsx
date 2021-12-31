import axios from "axios";
import { Link } from "react-router-dom";

const Nav = ({
  user,
  setUser,
}: {
  user: any;
  setUser: (value: any) => void;
}) => {
  const onLogout = async () => {
    const res = await axios.get("logout");
    if (res.status < 400) setUser("");
  };

  return (
    <div className="navbar navbar-expand-md navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
      </ul>

      <ul className="flex-right navbar-nav my-2 my-lg-8">
        {user ? (
          <li className="nav-item">
            <Link to="/logout" onClick={onLogout} className="nav-link">
              logout
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/forget" className="nav-link">
                FindPassword
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;

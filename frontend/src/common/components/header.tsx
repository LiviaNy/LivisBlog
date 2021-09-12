import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "../../users/models/userModels";
import "./header.css";

const Header: FC<any> = ({ isLoggedIn, username }) => {
  const pageTitle: string = username ? username : "";

  const logout = () => {
    localStorage.removeItem("token");
  };

  const headerNavLinks: NavData[] = [
    { access: "visitor", navLabel: "Login", navPath: "/login" },
    { access: "visitor", navLabel: "Register", navPath: "/register" },
    { access: "user", navLabel: "Add comment", navPath: "/comment" },
    { access: "user", navLabel: "Logout", navPath: "/login", onClick: logout },
  ];

  const showMenu: NavData[] = headerNavLinks.filter(
    (navData) =>
      (isLoggedIn && navData.access === "user") ||
      (!isLoggedIn && navData.access === "visitor")
  );

  return (
    <div className="header">
      <h1 className="header-title">
        <NavLink to="/">{pageTitle}</NavLink>
      </h1>
      <ul className="header-navigation">
        {showMenu.map((x, index) => (
          <li key={index} onClick={x.onClick}>
            <NavLink activeClassName="active" to={x.navPath}>
              {x.navLabel}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

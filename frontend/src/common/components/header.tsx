import { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { NavData } from "../../users/models/userModels";
import "./header.scss";

const Header: FC<any> = (isLoggedIn) => {
  const pageTitle: string = useSelector<any, any>(
    (state) => state.userReducer.username
  );
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
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
        <NavLink to="/blog">{pageTitle}</NavLink>
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

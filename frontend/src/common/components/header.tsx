import { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { NavData } from "../../users/models/userModels";
import "./header.scss";

const Header: FC<any> = () => {
  function refreshPage() {
    window.location.reload();
  }
  const isUserLoggedIn = localStorage.getItem("token") != null;
  const pageTitle: string = useSelector<any, any>(
    (state) => state.userReducer.username
  );
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
    refreshPage();
  };

  const headerNavLinks: NavData[] = [
    { access: "visitor", navLabel: "Login", navPath: "/login" },
    { access: "visitor", navLabel: "Register", navPath: "/register" },
    { access: "user", navLabel: "Blogs", navPath: "/blog" },
    { access: "user", navLabel: "Add comment", navPath: "/comment" },
    { access: "user", navLabel: "Manage comments", navPath: "/modify" },
    { access: "user", navLabel: "Logout", navPath: "/login", onClick: logout },
  ];

  const showMenu: NavData[] = headerNavLinks.filter(
    (navData) =>
      (isUserLoggedIn && navData.access === "user") ||
      (!isUserLoggedIn && navData.access === "visitor")
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

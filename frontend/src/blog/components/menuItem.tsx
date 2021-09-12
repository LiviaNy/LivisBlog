import { FC } from "react";
import { NavLink } from "react-router-dom";
import { MenuElement } from "../models/blogMenuModel";
import "./menuItem.scss";

const MenuItem: FC<MenuElement> = ({ menuName, path, iconPath }) => {
  return (
    <NavLink activeClassName="active" className="menu-item" to={path}>
      <li>
        <img src={iconPath} alt={menuName} />
        <p>{menuName}</p>
      </li>
    </NavLink>
  );
};

export default MenuItem;

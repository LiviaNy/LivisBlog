import { blogImageIconPath, blogPath } from "../../common/setings";
import { Label, MenuElement } from "../models/blogMenuModel";
import MenuItem from "./menuItem";
import "./blogMenu.scss";
import { useEffect } from "react";
import { get } from "../../services/apiService";
import { commentApiResponse } from "../../comment/models/commmentModels";

const BlogMenu = () => {
  const label: Label = {
    hospital: "In hospital",
    room: "In room",
    nursery: "At Nursery",
  };

  const blogMenuItems: MenuElement[] = [
    {
      menuName: label.hospital,
      path: `${blogPath}/hospital`,
      iconPath: `${blogImageIconPath}/hospital.png`,
    },
    {
      menuName: label.room,
      path: `${blogPath}/room`,
      iconPath: `${blogImageIconPath}/room.png`,
    },
    {
      menuName: label.nursery,
      path: `${blogPath}/nursery`,
      iconPath: `${blogImageIconPath}/nursery.jpg`,
    },
  ];

  return (
    <ul className="menu">
      {blogMenuItems.map((x, index) => (
        <MenuItem key={index} {...x} />
      ))}
    </ul>
  );
};

export default BlogMenu;

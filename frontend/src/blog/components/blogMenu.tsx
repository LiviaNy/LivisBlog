import { FC } from "react";

import { blogImageIconPath, blogPath } from "../../common/setings";
import { BlogMenuProps, Label, MenuElement } from "../models/blogMenuModel";
import MenuItem from "./MenuItem";

import "./blogMenu.scss";

const BlogMenu:FC<BlogMenuProps> = () => {
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

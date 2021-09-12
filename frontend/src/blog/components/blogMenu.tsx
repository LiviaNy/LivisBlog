import { blogMenuImagePath, blogPath } from "../../common/setings";
import { Label, MenuElement } from "../models/blogMenuModel";
import MenuItem from "./menuItem";
import "./blogMenu.scss";

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
      iconPath: `${blogMenuImagePath}/hospital.png`,
    },
    {
      menuName: label.room,
      path: `${blogPath}/room`,
      iconPath: `${blogMenuImagePath}/room.png`,
    },
    {
      menuName: label.nursery,
      path: `${blogPath}/nursery`,
      iconPath: `${blogMenuImagePath}/nursery.jpg`,
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

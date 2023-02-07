import HomeIcon from "./icons/home";
import UserIcon from "./icons/user";
import MessageIcon from "./icons/messages";

const data = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Users",
    icon: <UserIcon />,
    link: "/admin/users",
  },
  {
    title: "Messages",
    icon: <MessageIcon />,
    link: "/admin/messages",
  },
];

export default data;

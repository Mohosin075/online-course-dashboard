import {
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineProduct,
  AiOutlineUser,
} from "react-icons/ai";

export const AdminListItem = [
  {
    Label: "overview",
    location: "admin/overview",
    icon: <AiOutlineProduct />,
  },
  {
    Label: "Manage Users",
    location: "admin/manage-users",
    icon: <AiOutlineUser />,
  },
  {
    Label: "Analytics",
    location: "admin/analytics",
    icon: <AiOutlineBarChart />,
  },
  {
    Label: "Reports",
    location: "admin/reports",
    icon: <AiOutlineFileText />,
  },
];

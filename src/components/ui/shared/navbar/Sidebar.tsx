import Logo from "./Logo";
import NavList from "../../../../utils/NavList";
import Link from "next/link";
import { AdminListItem } from "@/constants/Constants";

const Sidebar = () => {
  return (
    <div className="menu min-h-full py-5 rounded-lg bg-base-200 text-base-content">
      <div className="block lg:hidden px-4">
        <Logo />
      </div>
      <div className="text-center pt-5 px-4">
        <Link href="/dashboard">
          <button className="p-3 border border-primary rounded-lg font-semibold text-xl text-primary w-full">
            Admin Dashboard
          </button>
        </Link>
      </div>
      <NavList Lists={AdminListItem} role="admin" />
    </div>
  );
};

export default Sidebar;

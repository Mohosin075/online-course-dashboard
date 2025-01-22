import Logo from "./Logo";
import { AdminListItem } from "@/constants/Constants";
import NavList from "@/components/ui/shared/navbar/NavList";
import ProfileWithRole from "./ProfileWithRole";
import LogOut from "./LogOut";

const Sidebar = () => {
  return (
    <div className="min-h-full bg-light-background px-5 py-10 w-64 md:w-72 lg:w-80">
      <div className="bg-white min-h-[90vh] rounded-lg py-4 lg:py-0">
        <div className="block lg:hidden px-4">
          <Logo />
        </div>
        <div className="pt-5 px-4 space-y-4">
          <div className="block md:hidden">
            <ProfileWithRole />
          </div>
          <div>
            <button className="CBtn w-full cursor-default">
              Admin Dashboard
            </button>
          </div>
          <LogOut/>
        </div>
        <NavList Lists={AdminListItem} />
        
      </div>
    </div>
  );
};

export default Sidebar;

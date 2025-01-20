import { Children } from "@/types";
import Sidebar from "./navbar/Sidebar";

const DashboardLayout = ({ children }: Children) => {
  return (
    <div className="CContainer">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

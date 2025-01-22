import { Children } from "@/types";
import Sidebar from "./navbar/Sidebar";

const DashboardLayout = ({ children }: Children) => {
  const user = true;
  return (
    <div className="md:py-5">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5 md:p-10 bg-light-background min-h-screen">
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
          {user && <Sidebar />}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

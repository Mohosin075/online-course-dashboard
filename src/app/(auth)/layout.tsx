import Navbar from "@/components/ui/shared/navbar/Navbar";
import { Children } from "@/types";

const layout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;

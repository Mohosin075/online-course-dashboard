import Navbar from "@/components/ui/shared/navbar/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;

import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";

const LogOut = () => {
  return (
    <div className="">
      <li className={`rounded hover:bg-primary hover:text-white list-none`}>
        <Link
          href={``}
          className="flex items-center px-4 py-2 text-sm md:text-lg capitalize"
        >
          <span className="mr-2 text-lg md:text-xl">
            <IoIosLogOut />
          </span>
          Log Out
        </Link>
      </li>
    </div>
  );
};

export default LogOut;

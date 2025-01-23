"use client";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";

const LogOut = () => {
  const dispatch = useAppDispatch();
  
  const handleLogOut =()=>{
    dispatch(logout())
  }

  return (
    <div className="">
      <li className={`rounded hover:bg-primary hover:text-white list-none`}>
        <Link
          onClick={handleLogOut}
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

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import ProfileWithRole from "./ProfileWithRole";
import { IoMdNotificationsOutline } from "react-icons/io";

const Profile = () => {
  const user = true;
  return (
    <div className="flex items-center gap-3 md:gap-5">
      {user ? (
        <>
          <div className="avatar online placeholder cursor-pointer">
            <div className="w-10 rounded-full bg-primaryGray">
              <span className="text-xl">
                <IoMdNotificationsOutline className="text-3xl avatar " />
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <ProfileWithRole />
          </div>
        </>
      ) : (
        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <button className="CBtn">Sign in</button>
          </Link>
          <Link href="/sign-up">
            <button className="CBtnBg">Sign up</button>
          </Link>
        </div>
      )}

      {user && (
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden btn bg-primaryGray text-primary text-xl"
        >
          <FaBars />
        </label>
      )}
    </div>
  );
};

export default Profile;

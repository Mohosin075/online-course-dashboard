import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Profile = () => {
    const name = 'Md Mohosin Ali'
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <div className="avatar online placeholder cursor-pointer">
        <div className="w-10 rounded-full bg-primaryGray">
          <span className="text-xl">
            <IoMdNotificationsOutline className="text-3xl avatar " />
          </span>
        </div>
      </div>

      <Link
        href={"/dashboard/manage-profile"}
        className="flex items-center gap-3"
      >
        <Image
          width={50}
          height={50}
          alt="logo"
          className="rounded-2xl w-12 h-12 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdrGQjxjRIAaWELeq0lTtMiR_PGcD2Lisaw&s"
        />
        <div>
          <h3 className="md:text-xl text-secondary font-semibold">{name?.length < 10 ? name : `${name?.slice(0, 10)}...`}</h3>
          <h3 className="md:text-xl text-secondary font-semibold">{}</h3>
          <h3 className="text-sm md:text-secondaryGray">Admin</h3>
        </div>
      </Link>

      <label
        htmlFor="my-drawer-2"
        className="drawer-button lg:hidden btn bg-primaryGray text-primary text-xl"
      >
        <FaBars />
      </label>
    </div>
  );
};

export default Profile;

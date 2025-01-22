import Image from "next/image";
import Link from "next/link";

const ProfileWithRole = () => {
  const name = "Md Mohosin Ali";
  return (
    <div className="flex items-center gap-3 md:gap-5">
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
          <h3 className="md:text-xl text-secondary font-semibold">
            {name?.length < 10 ? name : `${name?.slice(0, 10)}...`}
          </h3>
          <h3 className="md:text-xl text-secondary font-semibold">{}</h3>
          <h3 className="text-sm md:text-secondaryGray">Admin</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProfileWithRole;

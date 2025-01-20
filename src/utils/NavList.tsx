"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = ({ Lists, role }) => {
  const pathname = usePathname();
  return (
    <ul className="min-h-full w-80 p-4 space-y-2 bg-base-200 text-base-content">
      {Lists.map((list, i) =><li
          key={i}
          className={`rounded hover:bg-primary hover:text-white ${
            pathname === `/dashboard/${list?.location}`
              ? "bg-primary text-white"
              : ""
          }`}
        >
          <Link
            href={`/dashboard/${list?.location}`}
            className="flex items-center px-4 py-2 text-lg capitalize"
          >
            <span className="mr-2 text-xl">{list?.icon}</span>
            {list?.Label}
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavList;

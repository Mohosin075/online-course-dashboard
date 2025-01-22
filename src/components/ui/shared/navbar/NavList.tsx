"use client";
import { ListItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = ({ Lists }: { Lists: ListItem[] }) => {
  const pathname = usePathname();
  return (
    <ul className="menu min-h-full  p-4 space-y-1 md:space-y-2">
      {Lists.map((list, i) => (
        <li
          key={i}
          className={`rounded hover:bg-primary hover:text-white ${
            pathname === `/dashboard/${list?.location}`
              ? "bg-primary text-white"
              : ""
          }`}
        >
          <Link
            href={`/dashboard/${list?.location}`}
            className="flex items-center px-4 py-2 text-sm md:text-lg capitalize"
          >
            <span className="mr-2 text-lg md:text-xl">{list?.icon}</span>
            {list?.Label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;

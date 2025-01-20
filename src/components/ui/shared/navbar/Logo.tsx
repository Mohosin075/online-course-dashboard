import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className="flex items-center gap-2 md:gap-3 cursor-pointer">
      <Image
        width={50}
        height={50}
        alt="logo"
        className="w-12 h-12 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiO4EQCpBsYZVHiW2Xmc_FIvnipUsiZSPCqQ&s"
      />
      <h1 className="text-2xl md:text-3xl text-primary font-bold">
        Online Course
      </h1>
    </Link>
  );
};

export default Logo;

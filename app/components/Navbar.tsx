import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import Link from "next/link";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-[20px]">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image src={Logo} alt={"Logo"} />
        </Link>

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium " key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          Open an Account
        </p>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt={"Uer Profile"} />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in
          </span>
        </div>
        <Image src={Menu} alt={"Menu"} className="lg:hidden" />
      </div>
    </div>
  );
}

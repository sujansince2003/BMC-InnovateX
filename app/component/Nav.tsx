"use client";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
interface NavItem {
  name: string;
  slug: string;
  active: boolean;
}

export const navItems: NavItem[] = [
  { name: "Home", slug: "/", active: true },
  { name: "Organizer", slug: "/organizer", active: true },
  { name: "Schedule", slug: "/schedule", active: true },
  { name: "Teams", slug: "/teams", active: true },
  { name: "Sponsors", slug: "/sponsors", active: true },
  { name: "Tracks", slug: "/tracks", active: true },
  { name: "Contact", slug: "/contact", active: true },
];
import React, { useState } from "react";
import Link from "next/link";
const logo =
  "https://res.cloudinary.com/dtr4vo1dy/image/upload/v1742566658/logo_b4r5vm.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen((prev) => !prev);
  return (
    <nav className=" bg-[#008FAD]  fixed w-full z-20 top-0 start-0  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image src={logo} width={200} height={100} alt="BMC InnovateX" />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className=" hidden"></button>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <RxCross1 className="text-2xl text-white" />
            ) : (
              <LuMenu className="text-2xl text-white" />
            )}
          </button>
        </div>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul
            className={`flex flex-col items-center font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 lg:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${
              isOpen && "bg-[#009ec1]"
            }`}
          >
            {navItems?.map((item) => (
              <li key={item.slug}>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={item.slug}
                  className="block py-2 px-3 md:p-0 text-[16px] text-white  rounded"
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

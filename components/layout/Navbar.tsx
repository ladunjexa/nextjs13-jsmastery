"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Dropdown from "../shared/Dropdown";
import Theme from "./Theme";

import { useTheme } from "@/context/ThemeProvider";

import { navbarLinks, resourceTypes } from "@/constants";

import type { NavLink } from "@/types";

const Navbar = () => {
  const { mode } = useTheme();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = (): void => setShowMenu(!showMenu);

  useEffect(() => {
    const handleResize = (): void => {
      const isMobile = window.innerWidth <= 768;
      if (showMenu && !isMobile) setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-light-300/80 bg-white py-7 text-slate-950 dark:border-black-200 dark:bg-black-100 dark:text-white">
        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <Link href="/">
            <Image
              src={`/assets/images/jsm-logo-${mode}.svg`}
              width={55}
              height={40}
              alt="logo"
            />
          </Link>
          <div className="flex gap-2 md:hidden">
            <Theme isMobile />
            <Image
              src={
                showMenu
                  ? `/assets/icons/open-menu-icon-${mode}.svg`
                  : `/assets/icons/hamburger-menu-${mode}.svg`
              }
              width={30}
              height={30}
              alt="Hamburger menu"
              className="block cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
            {navbarLinks.slice(0, 2).map((link: NavLink, index) => (
              <li
                key={link.name}
                className={`body-text ${
                  index === 0
                    ? "text-gradient_blue-purple !font-bold"
                    : "!font-normal"
                }`}
              >
                <Link href={link.href} target={link.target || "_blank"}>
                  {link.name}
                </Link>
              </li>
            ))}
            <div className="flex gap-2">
              <Dropdown
                buttonComponent={
                  <Image
                    src={`/assets/icons/hamburger-menu-${
                      mode === "light" ? "light" : "white"
                    }.svg`}
                    width={30}
                    height={30}
                    alt="Hamburger menu"
                  />
                }
                dropdownComponent={resourceTypes.map((link: NavLink) => (
                  <Link href={link.href} key={link.name}>
                    <DropdownMenuItem className="from-[#4c73ff] to-[#389bff] capitalize text-slate-950 hover:bg-gradient-to-r dark:text-white">
                      <Image
                        src={`/assets/icons/${link.name}-${mode}.svg`}
                        width={30}
                        height={30}
                        alt={link.name}
                        className="mr-2"
                      />
                      {link.name}
                    </DropdownMenuItem>
                  </Link>
                ))}
              />
              <Theme />
            </div>
          </ul>
        </div>
      </nav>

      {showMenu && (
        <div className="flex-start fixed top-16 z-40 mt-5 h-fit w-full !items-center border-b-2 border-t border-white-500/60 bg-white py-5 text-slate-950 dark:border-black-300 dark:bg-black-100 dark:text-white">
          <ul className="flex-start paragraph-semibold w-full flex-col gap-2">
            {navbarLinks
              .slice()
              .reverse()
              .map((link: NavLink) => (
                <li
                  key={link.name}
                  className="w-full from-[#4c73ff] to-[#389bff] px-6 py-4 hover:bg-gradient-to-r xs:px-8"
                >
                  <Link
                    href={link.href}
                    target={link.target || "_blank"}
                    onClick={toggleMenu}
                    className="flex items-center gap-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

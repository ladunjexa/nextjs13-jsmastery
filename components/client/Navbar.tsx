import { useState, useEffect } from "react";
import Link from "next/link";

import ModeToggle from "./ModeToggle";
import { ThemeImage, ToggleResource } from "@/components/server";

import { navbarLinks } from "@/constants";

import type { NavLink } from "@/types";

const Navbar = (): JSX.Element => {
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
      <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-light-300/80 dark:border-black-200 bg-white dark:bg-black-100 py-7 text-slate-950 dark:text-white">
        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <Link href="/">
            <ThemeImage
              srcLight="/assets/images/jsm-logo-light.svg"
              srcDark="/assets/images/jsm-logo.svg"
              width={55}
              height={40}
              alt="logo"
            />
          </Link>
          <div className="flex gap-2 md:hidden">
            <ModeToggle slate />
            <ThemeImage
              srcLight={
                !showMenu
                  ? `/assets/icons/hamburger-menu-light.svg`
                  : `/assets/icons/open-menu-icon-light.svg`
              }
              srcDark={
                !showMenu
                  ? `/assets/icons/hamburger-menu.svg`
                  : `/assets/icons/open-menu-icon.svg`
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
              <ToggleResource />
              <ModeToggle />
            </div>
          </ul>
        </div>
      </nav>

      {showMenu && (
        <div className="flex-start fixed top-16 z-40 border-b-2 text-slate-950 dark:text-white mt-5 h-fit w-full !items-center border-t border-white-500/60 dark:border-black-300 bg-white dark:bg-black-100 py-5">
          <ul className="flex-start paragraph-semibold w-full flex-col gap-2">
            {navbarLinks
              .slice()
              .reverse()
              .map((link: NavLink) => (
                <li
                  key={link.name}
                  className="hover:bg-gradient-to-r from-[#4c73ff] to-[#389bff] w-full px-6 py-4 xs:px-8"
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

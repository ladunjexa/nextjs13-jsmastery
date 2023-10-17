import Link from "next/link";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ThemeImage, ToggleMenu } from "@/components/server";

import { resourceTypes } from "@/constants";

import type { NavLink } from "@/types";

const ToggleResource = () => {
  return (
    <ToggleMenu
      buttonComponent={
        <ThemeImage
          srcLight={`/assets/icons/hamburger-menu-light.svg`}
          srcDark={`/assets/icons/hamburger-menu-white.svg`}
          width={30}
          height={30}
          alt="Hamburger menu"
        />
      }
      dropdownComponent={resourceTypes.map((link: NavLink) => (
        <Link href={link.href} key={link.name}>
          <DropdownMenuItem className="capitalize text-slate-950 dark:text-white hover:bg-gradient-to-r from-[#4c73ff] to-[#389bff]">
            <ThemeImage
              srcLight={`/assets/icons/${link.name}-light.svg`}
              srcDark={`/assets/icons/${link.name}.svg`}
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
  );
};

export default ToggleResource;

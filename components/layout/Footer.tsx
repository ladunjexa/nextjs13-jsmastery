import Link from "next/link";

import { footerLinks } from "@/constants";

import type { NavLink } from "@/types";

const Footer = () => {
  return (
    <footer className="flex-between body-text w-full gap-y-10 border-t border-light-300 bg-white px-20 py-12 text-slate-950 dark:border-black-400 dark:bg-black-100 dark:text-white-800 max-md:flex-col">
      <p>Copyright © 2023 Liron Abutbul | All Rights Reserved</p>

      <div className="flex gap-x-9">
        {footerLinks.map((link: NavLink) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.target || "_self"}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

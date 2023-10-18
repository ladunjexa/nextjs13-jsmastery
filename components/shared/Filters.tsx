"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { formUrlQuery } from "@/sanity/utils";

import { filterOptions } from "@/constants";

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [active, setActive] = useState<string>("");

  const handleFilter = (link: string): void => {
    let newUrl: string = "";

    if (active === link) {
      setActive("");

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <ul className="body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 text-slate-950 dark:text-white-800 sm:max-w-2xl">
      {filterOptions.map((link: string) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link && "gradient_blue-purple"
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;

"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { Input } from "@/components/ui/input";

import { formUrlQuery } from "@/sanity/utils";

import { useTheme } from "@/context/ThemeProvider";

const SearchForm = () => {
  const { mode } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if (searchTerm) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchTerm,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, router, searchParams]);

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src={`/assets/icons/magnifying-glass-${mode}.svg`}
          width={32}
          height={32}
          alt="Search icon"
          className="absolute left-8"
        />
        <Input
          className="base-regular h-fit border-0 bg-light py-6 pl-20 pr-8 text-slate-950 !ring-0 !ring-offset-0 placeholder:text-slate-950 dark:bg-black-400 dark:text-white-800 dark:placeholder:text-white-800"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
      </label>
    </form>
  );
};

export default SearchForm;

"use client";

import { useTheme } from "@/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Dropdown from "../shared/Dropdown";

import { themes } from "@/constants";

const Theme = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { mode, setMode } = useTheme();

  return (
    <Dropdown
      buttonComponent={
        <>
          {mode === "light" && (
            <Sun className="h-[1.2rem] w-[1.2rem] text-slate-950" />
          )}
          {mode === "dark" && (
            <Moon
              className={`absolute h-[1.2rem] w-[1.2rem] ${
                isMobile ? "text-slate-300" : "text-white"
              }`}
            />
          )}
          <span className="sr-only">Toggle theme</span>
        </>
      }
      dropdownComponent={themes.map((theme) => (
        <DropdownMenuItem
          key={theme.label}
          onClick={() => {
            setMode(theme.value);

            if (theme.value !== "system") {
              localStorage.theme = theme.value;
            } else {
              localStorage.removeItem("theme");
            }
          }}
          className="from-[#4c73ff] to-[#389bff] capitalize text-slate-950 hover:bg-gradient-to-r dark:text-white"
        >
          {theme.label}
        </DropdownMenuItem>
      ))}
    />
  );
};

export default Theme;

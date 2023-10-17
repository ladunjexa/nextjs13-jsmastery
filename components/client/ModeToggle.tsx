import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ToggleMenu } from "@/components/server";

const ModeToggle = ({ slate = false }: { slate?: boolean }) => {
  const { setTheme, themes } = useTheme();

  return (
    <ToggleMenu
      buttonComponent={
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-slate-950" />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${
              slate ? "text-slate-300" : "text-white"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </>
      }
      dropdownComponent={themes.map((theme: string) => (
        <DropdownMenuItem
          key={theme}
          onClick={() => setTheme(theme)}
          className="capitalize text-slate-950 dark:text-white hover:bg-gradient-to-r from-[#4c73ff] to-[#389bff]"
        >
          {theme}
        </DropdownMenuItem>
      ))}
    />
  );
};

export default ModeToggle;

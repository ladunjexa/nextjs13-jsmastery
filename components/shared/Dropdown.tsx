import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  buttonComponent: React.ReactNode;
  dropdownComponent: React.ReactNode;
};

const Dropdown = ({ buttonComponent, dropdownComponent }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-none !outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {buttonComponent}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-none bg-white dark:bg-black-400"
      >
        {dropdownComponent}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;

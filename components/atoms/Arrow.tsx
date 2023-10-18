"use client";

import Image from "next/image";

import { useTheme } from "@/context/ThemeProvider";

const Arrow = () => {
  const { mode } = useTheme();

  return (
    <Image
      src={`/assets/icons/arrow-${mode}.svg`}
      alt="arrow"
      width={13}
      height={10}
    />
  );
};

export default Arrow;

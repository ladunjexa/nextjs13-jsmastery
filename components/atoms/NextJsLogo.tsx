import React from "react";
import Image from "next/image";

const NextJsLogo = ({ isDark = false }: { isDark?: boolean }) => {
  const src = `/assets/images/nextjs-logo-${isDark ? "dark" : "light"}.svg`;

  return (
    <>
      <Image
        src={src}
        width={470}
        height={479}
        alt="Next.js logo"
        className="fixed top-1/2 z-0 flex h-[479px] w-[470px] -translate-y-1/2 lg:left-[-70px]"
      />
      <Image
        src={src}
        width={470}
        height={479}
        alt="Next.js logo"
        className="fixed right-[-170px] top-1/2 flex h-[479px] w-[470px] -translate-y-1/2 max-xl:hidden"
      />
    </>
  );
};

export default NextJsLogo;

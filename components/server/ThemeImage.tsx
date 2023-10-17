import Image from "next/image";

import type { ThemeImageProps } from "@/types";

const ThemeImage = (props: ThemeImageProps) => {
  const { srcLight, srcDark, className, ...rest } = props;

  const darkCn: string =
    className !== undefined
      ? `hidden dark:block ${className}`
      : "hidden dark:block";
  const lightCn: string =
    className !== undefined ? `dark:hidden ${className}` : "dark:hidden";

  return (
    <>
      <Image
        src={srcLight}
        className={lightCn}
        width={props.width || 13}
        height={props.height || 10}
        {...rest}
      />
      <Image
        src={srcDark}
        className={darkCn}
        width={props.width || 13}
        height={props.height || 10}
        {...rest}
      />
    </>
  );
};

export default ThemeImage;

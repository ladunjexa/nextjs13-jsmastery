import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { ContentCardProps } from "@/types";

const ContentCard = ({
  id,
  title,
  image,
  downloadNumber,
  link,
  isVideo,
}: ContentCardProps) => {
  const href = isVideo ? link : `/resources/${id}`;

  return (
    <Card
      className={`w-full ${
        isVideo
          ? "rounded-[10px] border border-light-400 bg-light p-3 text-slate-950 shadow-sm dark:border-slate-800 dark:bg-black-200/80 dark:text-slate-50 sm:w-[410px] sm:p-5"
          : "max-w-fit border-0 !bg-transparent sm:max-w-[356px]"
      }`}
    >
      <Link href={href}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div
            className={`w-full ${
              isVideo
                ? "relative h-[170px] rounded-md xs:h-[265px] sm:h-[210px]"
                : "h-fit"
            }`}
          >
            {isVideo ? (
              <Image
                src={image}
                className="h-full rounded-md object-cover"
                alt={title}
                fill
              />
            ) : (
              <Image
                src={image}
                className="h-full rounded-md object-cover"
                width={384}
                height={440}
                alt={title}
              />
            )}
          </div>

          <CardTitle
            className={`w-full text-left text-slate-950 dark:text-white ${
              isVideo
                ? "body-semibold line-clamp-2 pt-5 text-2xl font-semibold leading-none tracking-tight"
                : "paragraph-semibold line-clamp-1"
            }`}
          >
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div
          className={`flex-center body-medium gap-1.5 ${
            isVideo
              ? "capitalize text-slate-400 dark:text-white-500"
              : "text-slate-950 dark:text-white"
          }`}
        >
          {!isVideo && (
            <Image
              src="/assets/icons/downloads.svg"
              width={20}
              height={20}
              alt="download"
            />
          )}
          {downloadNumber}
        </div>
        <Link
          href={href}
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          {isVideo ? "Watch" : "Download"} Now
          <Image
            src="/assets/icons/arrow-blue.svg"
            width={13}
            height={10}
            alt="arrow"
          />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ContentCard;

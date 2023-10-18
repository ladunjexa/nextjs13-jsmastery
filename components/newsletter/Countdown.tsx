"use client";

import { useState, useEffect } from "react";
import { getCountdownData } from "@/lib/utils";

import type { CountdownProps } from "@/types";

const Countdown = ({ initialDate }: { initialDate: number }) => {
  const [countdown, setCountdown] = useState<CountdownProps | null>(null);

  useEffect(() => {
    const interval = setInterval(
      () => setCountdown(getCountdownData(initialDate)),
      1000
    );

    return () => clearInterval(interval);
  }, [countdown, initialDate]);

  if (!countdown) return null;

  return (
    <div className="z-10 flex flex-wrap items-center justify-center pb-11">
      {Object.entries(countdown).map(([key, value], index) => (
        <div
          key={index}
          className="m-4 flex flex-col items-center justify-center max-sm:basis-1/3"
        >
          <div className="flex h-[70px] w-[76px] items-center justify-center rounded-[10px] bg-slate-300 p-5 dark:bg-black-400">
            <h2 className="heading3 text-center">{value}</h2>
          </div>
          <h3 className="paragraph-semibold mt-2 text-slate-950 dark:text-white-500">
            {key}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

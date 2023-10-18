import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CountdownProps } from "@/types";

/**
 * Combines class values into a single-separated string.
 * @param {...ClassValue} inputs - The class values to combine.
 * @returns  {string} - The combined class values.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates and returns countdown data based on a target timestamp.
 * @param {number} timestamp - The target timestamp for the countdown.
 * @returns {CountdownProps} - An object containing days, hours, minutes, and seconds as strings.
 */
export const getCountdownData = (timestamp: number): CountdownProps => {
  const now: number = new Date().getTime();
  const rem: number = timestamp - now;
  const f = (value: number): string => value.toString().padStart(2, "0");

  if (rem <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const days: string = f(Math.floor(rem / (1000 * 60 * 60 * 24)));
  const hours: string = f(
    Math.floor((rem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes: string = f(Math.floor((rem % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds: string = f(Math.floor((rem % (1000 * 60)) / 1000));

  return { days, hours, minutes, seconds };
};

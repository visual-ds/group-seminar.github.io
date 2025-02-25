import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  "https://visual-ds.github.io/group-seminar.github.io/";
console.log("base Path", basePath);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function normalizeDate(date: string | Date): number {
  const parsedDate = new Date(date);
  return new Date(
    parsedDate.getFullYear(),
    parsedDate.getMonth(),
    parsedDate.getDate()
  ).getTime();
}

export function isRecentTalk(date: string) {
  return normalizeDate(date) === normalizeDate(new Date());
}

export function isFutureTalk(date: string) {
  return normalizeDate(date) > normalizeDate(new Date());
}

export function isPastTalk(date: string) {
  return normalizeDate(date) < normalizeDate(new Date());
}

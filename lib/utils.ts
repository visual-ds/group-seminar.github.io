import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isRecentTalk(date: string) {
  const currentDate = new Date();
  const seminarDate = new Date(date);

  const simplifiedCurrentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const simplifiedSeminarDate = new Date(
    seminarDate.getFullYear(),
    seminarDate.getMonth(),
    seminarDate.getDate()
  );

  const isEqual = simplifiedSeminarDate.getTime() === simplifiedCurrentDate.getTime();

  return isEqual;
}

export function isFutureTalk(date: string) {
  const currentDate = new Date();
  const seminarDate = new Date(date);

  const simplifiedCurrentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const simplifiedSeminarDate = new Date(
    seminarDate.getFullYear(),
    seminarDate.getMonth(),
    seminarDate.getDate()
  );

  const isFuture = simplifiedSeminarDate.getTime() > simplifiedCurrentDate.getTime();

  return isFuture;
}


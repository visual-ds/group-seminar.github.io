import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export interface Seminar {
  date: string;
  time: string;
  speaker: {
    name: string[];
    topic: string;
    image: string[];
    advisor: string;
    description: string;
    email: string[];
    links: {
      recording: boolean;
      slides: boolean;
    }
  }
}

export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  "https://visual-ds.github.io/group-seminar.github.io/";
console.log("base Path", basePath);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeDate(date: string | Date): number {
  const parsedDate = new Date(date);
  return new Date(
    parsedDate.getFullYear(),
    parsedDate.getMonth(),
    parsedDate.getDate()
  ).getTime();
}

export function isRecentTalk(date: string, allTalks: Seminar[]): boolean {
  const today = normalizeDate(new Date());
  const talkDate = normalizeDate(date);
  
  if (talkDate >= today) {
    const upcomingTalks = allTalks
      .filter(talk => normalizeDate(talk.date) >= today)
      .sort((a, b) => normalizeDate(a.date) - normalizeDate(b.date));
    
    if (upcomingTalks.length > 0 && normalizeDate(upcomingTalks[0].date) === talkDate) {
      return true;
    }
  }
  
  return false;
}



export function isFutureTalk(date: string, allTalks: Seminar[]): boolean {
  const today = normalizeDate(new Date());
  const talkDate = normalizeDate(date);
  
  if (talkDate > today) {
    const upcomingTalks = allTalks
      .filter(talk => normalizeDate(talk.date) >= today)
      .sort((a, b) => normalizeDate(a.date) - normalizeDate(b.date));
    
    if (upcomingTalks.length > 0 && normalizeDate(upcomingTalks[0].date) !== talkDate) {
      return true;
    }
  }
  
  return false;
}

export function isPastTalk(date: string): boolean {
  return normalizeDate(date) < normalizeDate(new Date());
}

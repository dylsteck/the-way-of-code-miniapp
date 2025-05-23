import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const APP_URL = 'https://the-way-of-code-miniapp.vercel.app';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

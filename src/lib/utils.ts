import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const COINGECKO_URL="https://api.coingecko.com/api/v3";

export function formatUSD(amount: number) {
  // Create our number formatter for USD.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(amount);
}


export function formatINR(amount: number) {
  // Create our number formatter for INR.
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  return formatter.format(amount);
}

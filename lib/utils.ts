import { type ClassValue, clsx } from "./utils-internal";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

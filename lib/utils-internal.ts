export type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | { [key: string]: boolean | null | undefined };

export function clsx(inputs: ClassValue[]): string {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) {
      continue;
    }

    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input));
      continue;
    }

    if (Array.isArray(input)) {
      const nested = clsx(input);
      if (nested) {
        classes.push(nested);
      }
      continue;
    }

    for (const [key, value] of Object.entries(input)) {
      if (value) {
        classes.push(key);
      }
    }
  }

  return classes.join(" ");
}

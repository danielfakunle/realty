import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  const customTailwindMerge = extendTailwindMerge({
    extend: {
      classGroups: {
        "font-size": [
          {
            text: [
              "display-xs",
              "display-sm",
              "display-base",
              "display-lg",
              "display-xl",
            ],
          },
        ],
      },
    },
  });
  return customTailwindMerge(clsx(inputs));
}

import { tv } from "tailwind-variants";
export const badge = tv({
  base: "flex items-center gap-3 backdrop-blur-sm rounded-full px-4 py-2 border",
  variants: {
    color: {
      emerald:
        "bg-white/50 dark:bg-white/10 border-emerald-200/50 dark:border-emerald-500/30",
      blue: "bg-white/50 dark:bg-white/10 border-blue-200/50 dark:border-blue-500/30",
      purple:
        "bg-white/50 dark:bg-white/10 border-purple-200/50 dark:border-purple-500/30",
    },
  },
  defaultVariants: {
    color: "emerald",
  },
});

export const dot = tv({
  base: "w-3 h-3 rounded-full animate-pulse",
  variants: {
    color: {
      emerald: "bg-emerald-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
    },
  },
});

export const text = tv({
  base: "font-medium",
  variants: {
    color: {
      emerald: "text-emerald-700 dark:text-emerald-300",
      blue: "text-blue-700 dark:text-blue-300",
      purple: "text-purple-700 dark:text-purple-300",
    },
  },
});

export const icon = tv({
  base: "w-4 h-4",
  variants: {
    color: {
      emerald: "text-emerald-600 dark:text-emerald-400",
      blue: "text-blue-600 dark:text-blue-400",
      purple: "text-purple-600 dark:text-purple-400",
    },
  },
});

import { useTheme } from "@/hooks/use-theme";
import { Sun, Moon } from "lucide-react";

const ThemeToggleButton = ({ className }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`inline-flex items-center gap-2 rounded-full border border-border cursor-pointer bg-card/80 px-4 py-2 text-xs backdrop-blur transition-colors hover:bg-secondary ${className || ""}`}
    >
      {theme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggleButton;

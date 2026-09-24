import { cn } from "cn"

function AppleSwitch({ checked, onCheckedChange, label, className, disabled = false }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "group inline-flex shrink-0 items-center rounded-full border border-transparent p-0.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-foreground" : "bg-secondary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-[18px] rounded-full bg-background shadow-sm transition-transform duration-200",
          checked && "translate-x-[18px]",
        )}
      />
    </button>
  )
}

export { AppleSwitch }

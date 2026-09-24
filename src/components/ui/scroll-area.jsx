import { cn } from "cn"

function ScrollArea({ className, viewportClassName, children, ...props }) {
  return (
    <div data-slot="scroll-area" className={cn("relative overflow-hidden", className)} {...props}>
      <div data-slot="scroll-area-viewport" className={cn("h-full w-full overflow-auto", viewportClassName)}>
        {children}
      </div>
    </div>
  )
}

export { ScrollArea }

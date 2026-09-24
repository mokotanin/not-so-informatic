import { createContext, useContext, useState } from "react"
import { cn } from "@/lib/utils"

const CollapsibleContext = createContext(null)

function Collapsible({ open, defaultOpen = false, onOpenChange, className, children, ...props }) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isOpen = open ?? internalOpen

  function setOpen(nextOpen) {
    if (open === undefined) setInternalOpen(nextOpen)
    onOpenChange?.(nextOpen)
  }

  return (
    <CollapsibleContext.Provider value={{ open: isOpen, setOpen }}>
      <div data-slot="collapsible" data-state={isOpen ? "open" : "closed"} className={cn(className)} {...props}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  )
}

function CollapsibleTrigger({ className, children, onClick, ...props }) {
  const context = useContext(CollapsibleContext)
  if (!context) throw new Error("CollapsibleTrigger must be used inside Collapsible")

  return (
    <button
      type="button"
      data-slot="collapsible-trigger"
      aria-expanded={context.open}
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) context.setOpen(!context.open)
      }}
      {...props}
    >
      {children}
    </button>
  )
}

function CollapsibleContent({ className, children, ...props }) {
  const context = useContext(CollapsibleContext)
  if (!context) throw new Error("CollapsibleContent must be used inside Collapsible")
  if (!context.open) return null

  return (
    <div data-slot="collapsible-content" className={cn(className)} {...props}>
      {children}
    </div>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

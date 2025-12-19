import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        variant === "secondary" && "border-transparent bg-purple-600 text-white hover:bg-purple-700",
        variant === "outline" && "text-zinc-400 border-zinc-700",
        className
      )} 
      {...props} 
    />
  )
}

export { Badge }
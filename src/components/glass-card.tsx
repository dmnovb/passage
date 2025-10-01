import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn("rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-sm", className)}>
      {children}
    </div>
  )
}

export default GlassCard

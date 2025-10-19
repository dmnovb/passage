"use client"

import { Search, ArrowLeft } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface PassageHeaderProps {
    category: string
    icon: LucideIcon
    verseCount: number
}

export default function PassageHeader({ category, icon: Icon, verseCount }: PassageHeaderProps) {
    return (
        <div className="space-y-6 sm:space-y-8">
            {/* Breadcrumb */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform" />
                Back to all categories
            </Link>

            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight break-words">{category}</h1>
                        <p className="text-sm sm:text-base text-muted-foreground mt-1">
                            {verseCount} {verseCount === 1 ? "passage" : "passages"}
                        </p>
                    </div>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                    Find comfort and inspiration in these verses about {category.toLowerCase()}.
                </p>
            </div>

            {/* Search within category */}
            <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <label className="sr-only" htmlFor="category-search">
                    Search within {category}
                </label>
                <input
                    id="category-search"
                    placeholder={`Search within ${category}...`}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-card border border-border rounded-xl outline-none placeholder:text-muted-foreground/70 text-sm sm:text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
            </div>
        </div>
    )
}

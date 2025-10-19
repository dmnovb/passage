"use client"

import { Heart, Share2, BookOpen } from "lucide-react"
import { useState } from "react"

interface Verse {
    id: number
    text: string
    reference: string
    book: string
    chapter: number
    verse: number
}

interface VerseCardProps {
    verse: Verse
}

export default function VerseCard({ verse }: VerseCardProps) {
    const [isSaved, setIsSaved] = useState(false)

    return (
        <article className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border p-5 sm:p-8 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <div className="relative space-y-4 sm:space-y-6">
                {/* Verse Text */}
                <blockquote className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground text-pretty">
                    "{verse.text}"
                </blockquote>

                {/* Reference and Actions */}
                <div className="flex items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground min-w-0">
                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <cite className="not-italic font-medium text-xs sm:text-sm truncate">{verse.reference}</cite>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                            onClick={() => setIsSaved(!isSaved)}
                            className={`p-1.5 sm:p-2 rounded-lg transition-all hover:bg-secondary ${isSaved ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                }`}
                            aria-label={isSaved ? "Remove from saved" : "Save passage"}
                        >
                            <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isSaved ? "fill-current" : ""}`} />
                        </button>
                        <button
                            className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                            aria-label="Share passage"
                        >
                            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

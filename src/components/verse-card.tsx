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
        <article className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <div className="relative space-y-6">
                {/* Verse Text */}
                <blockquote className="text-lg md:text-xl leading-relaxed text-foreground text-pretty">
                    "{verse.text}"
                </blockquote>

                {/* Reference and Actions */}
                <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="w-4 h-4" />
                        <cite className="not-italic font-medium text-sm">{verse.reference}</cite>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsSaved(!isSaved)}
                            className={`p-2 rounded-lg transition-all hover:bg-secondary ${isSaved ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                }`}
                            aria-label={isSaved ? "Remove from saved" : "Save passage"}
                        >
                            <Heart className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
                        </button>
                        <button
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                            aria-label="Share passage"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

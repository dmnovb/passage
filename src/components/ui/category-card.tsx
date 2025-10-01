"use client"

import { useRouter } from "next/navigation"

interface CategoryCardProps {
    label: string
    emoji: React.ReactNode
}

function CategoryCard({ label, emoji }: CategoryCardProps) {
    const router = useRouter()

    return (
        <button onClick={() => router.push(`/category/${label}`)} className="hover:cursor-pointer group relative overflow-hidden rounded-xl bg-card border border-border p-6 text-left transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-0.5">
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Content */}
            <div className="relative space-y-3">
                <div className="text-3xl">{emoji}</div>
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {label}
                </h3>
                <p className="text-sm text-muted-foreground">Explore passages about {label.toLowerCase()}</p>
            </div>

            {/* Arrow indicator */}
            <div className="absolute bottom-4 right-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </button>
    )
}

export default CategoryCard

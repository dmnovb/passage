"use client"

import { BookOpen, Heart, Leaf, Search, Shield, Sparkles, Sprout, Sunrise, Trophy } from "lucide-react"
import CategoryCard from "@/components/ui/category-card"

function Content() {
  return (
    <section className="space-y-12">
      {/* Header with icon */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-balance">Passage</h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
          Find passages that speak to your heart. Choose a theme, or search by keyword to discover verses that bring
          peace and clarity.
        </p>
      </header>

      {/* Enhanced Search Bar */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search className="w-5 h-5" />
        </div>
        <label className="sr-only" htmlFor="search">
          Search passages
        </label>
        <input
          id="search"
          placeholder="Search by keyword (e.g., peace, hope, strength)"
          className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl outline-none placeholder:text-muted-foreground/70 text-base focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
        />
      </div>

      {/* Categories Section */}
      <section aria-label="Popular categories" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-wider font-medium text-muted-foreground">Popular Categories</h2>
          {/* <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors hover:underline hover:cursor-pointer">View all</button> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: "Faith", emoji: Sparkles },        // ✨
            { label: "Peace", emoji: Leaf },            // 🕊️
            { label: "Hope", emoji: Sunrise },          // 🌅
            { label: "Wisdom", emoji: BookOpen },       // 📖
            { label: "Strength", emoji: Trophy },       // 💪
            { label: "Courage", emoji: Shield },        // 🦁
            { label: "Perseverance", emoji: Sprout },   // 🌱
            { label: "Love", emoji: Heart },            // ❤️
          ].map((category) => (
            <CategoryCard key={category.label} label={category.label} emoji={<category.emoji />} />
          ))}
        </div>
      </section>

      {/* Recent Searches or Suggestions */}
      <section aria-label="Quick access" className="space-y-6">
        <h2 className="text-sm uppercase tracking-wider font-medium text-muted-foreground">Quick Access</h2>
        <div className="flex flex-wrap gap-2">
          {["Comfort in trials", "God's promises", "Prayer", "Forgiveness", "Gratitude"].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 rounded-full bg-secondary/60 hover:bg-secondary text-secondary-foreground text-sm font-medium transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Content

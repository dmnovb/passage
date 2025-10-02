"use client"

import { BookOpen, Cloud, Heart, Leaf, Lightbulb, Mountain, Search, Shield, Smile, Sparkles, Sprout, Sun, Sunrise, Trophy } from "lucide-react"
import CategoryCard from "@/components/ui/category-card"
import Link from "next/link"

const feelings = [
  {
    emotion: "Anxious",
    description: "Find peace in His presence",
    category: "peace",
    icon: Cloud,
    color: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20",
  },
  {
    emotion: "Weak",
    description: "Discover your strength in Him",
    category: "strength",
    icon: Mountain,
    color: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20",
  },
  {
    emotion: "Lost",
    description: "Let hope guide your way",
    category: "hope",
    icon: Sun,
    color: "bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/20",
  },
  {
    emotion: "Uncertain",
    description: "Seek wisdom for clarity",
    category: "wisdom",
    icon: Lightbulb,
    color: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20",
  },
  {
    emotion: "Afraid",
    description: "Find courage to face today",
    category: "courage",
    icon: Shield,
    color: "bg-red-500/10 hover:bg-red-500/20 border-red-500/20",
  },
  {
    emotion: "Grateful",
    description: "Celebrate His love",
    category: "love",
    icon: Heart,
    color: "bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/20",
  },
  {
    emotion: "Struggling",
    description: "Build perseverance through trials",
    category: "perseverance",
    icon: Sparkles,
    color: "bg-green-500/10 hover:bg-green-500/20 border-green-500/20",
  },
  {
    emotion: "Joyful",
    description: "Rest in His peace",
    category: "peace",
    icon: Smile,
    color: "bg-teal-500/10 hover:bg-teal-500/20 border-teal-500/20",
  },
]

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

      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-1 h-16 bg-primary rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-medium text-primary mb-2">Verse of the Day</p>
            <blockquote className="text-xl lg:text-2xl text-foreground font-serif leading-relaxed text-pretty">
              "I can do all things through Christ who strengthens me."
            </blockquote>
            <cite className="text-sm text-muted-foreground mt-3 block not-italic">Philippians 4:13</cite>
          </div>
        </div>
      </div>

      {/* Enhanced Search Bar */}
      {/* <div className="relative">
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
      </div> */}

      <div className="text-center space-y-2">
        <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">How are you feeling today?</h2>
        <p className="text-muted-foreground text-pretty">
          Let us help you find the verses that speak to your heart right now
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {feelings.map((feeling) => {
          const Icon = feeling.icon
          return (
            <Link
              key={feeling.emotion}
              href={`/category/${feeling.category}`}
              className={`group relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background/50">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{feeling.emotion}</h3>
                  <p className="text-xs text-muted-foreground text-pretty leading-relaxed">{feeling.description}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

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

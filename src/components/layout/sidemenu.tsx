"use client"

import { useState } from "react"
import { Sparkles, Heart, Shield, Smile, Sun, BookOpen, Mountain, Home, Bookmark } from "lucide-react"

const categories = [
  { name: "Home", icon: Home },
  { name: "Faith", icon: Sparkles },
  { name: "Strength", icon: Mountain },
  { name: "Courage", icon: Shield },
  { name: "Peace", icon: Smile },
  { name: "Hope", icon: Sun },
  { name: "Wisdom", icon: BookOpen },
  { name: "Love", icon: Heart },
]

function Sidemenu() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name)

  return (
    <nav aria-label="Categories" className="space-y-8">
      {/* Logo/Title */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Passage</h1>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">Your spiritual companion</p>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-wider font-medium text-muted-foreground px-3 mb-4">Categories</h2>
        <ul className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.name

            return (
              <li key={category.name}>
                <button
                  onClick={() => setActiveCategory(category.name)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group hover:cursor-pointer ${isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-sidebar-accent text-sidebar-foreground"
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                  />
                  <span className="font-medium text-sm">{category.name}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-foreground" />}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Saved Passages */}
      <div className="pt-6 border-t border-sidebar-border">
        <button className="hover:cursor-pointer w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-all group">
          <Bookmark className="w-5 h-5 text-muted-foreground transition-transform group-hover:scale-110" />
          <span className="font-medium text-sm">Saved Passages</span>
        </button>
      </div>
    </nav>
  )
}

export default Sidemenu

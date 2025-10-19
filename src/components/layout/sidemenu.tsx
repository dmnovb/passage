"use client"

import { Sparkles, Heart, Search, BookMarked, Settings, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

function Sidemenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const savedVerses = [
    {
      text: "I can do all things through Christ who strengthens me.",
      reference: "Philippians 4:13",
      category: "Strength",
    },
    { text: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1", category: "Peace" },
    { text: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16", category: "Love" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border shadow-lg"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 z-40 w-[280px] glass p-6 overflow-auto transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <SideMenuContent onLinkClick={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <SideMenuContent />
      </div>
    </>
  )
}

function SideMenuContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const savedVerses = [
    {
      text: "I can do all things through Christ who strengthens me.",
      reference: "Philippians 4:13",
      category: "Strength",
    },
    { text: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1", category: "Peace" },
    { text: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16", category: "Love" },
  ]

  return (
    <nav aria-label="Library" className="space-y-6">
      {/* Logo/Title */}
      <Link href="/" className="block space-y-2 group" onClick={onLinkClick}>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-semibold">Passage</h1>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">Your spiritual companion</p>
      </Link>

      <div className="space-y-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search verses..."
            className="pl-9 bg-card border-sidebar-border focus-visible:ring-primary/20"
          />
        </div>
      </div>

      <div className="bg-card rounded-lg p-4 border border-sidebar-border space-y-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <BookMarked className="w-4 h-4" />
          <span className="text-xs uppercase tracking-wider font-medium">Reading Stats</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Saved verses</span>
            <span className="text-lg">12</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Days active</span>
            <span className="text-lg">7</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs uppercase tracking-wider font-medium text-muted-foreground flex items-center gap-2">
            <Heart className="w-3.5 h-3.5" />
            Saved Verses
          </h2>
          <Link href="/saved" className="text-xs text-primary hover:underline" onClick={onLinkClick}>
            View all
          </Link>
        </div>
        <div className="space-y-2">
          {savedVerses.map((verse, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-3 border border-sidebar-border hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <p className="text-sm leading-relaxed text-foreground/90 line-clamp-2 mb-2 group-hover:text-foreground transition-colors">
                {verse.text}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground font-medium">{verse.reference}</p>
                <span className="text-xs text-primary/70 bg-primary/5 px-2 py-0.5 border rounded">{verse.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-sidebar-border">
        <Link
          href="/settings"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-all group"
          onClick={onLinkClick}
        >
          <Settings className="w-5 h-5 text-muted-foreground transition-transform group-hover:rotate-90" />
          <span className="font-medium text-sm">Settings</span>
        </Link>
      </div>
    </nav>
  )
}

export default Sidemenu

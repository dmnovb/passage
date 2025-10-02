'use client'

import useBibleSearch from '@/hooks/use-get-data';
import React, { use, useState } from 'react'
import PassageHeader from '@/components/passage-header';
import VerseCard from '@/components/verse-card';
import { useSearchParams } from 'next/navigation';
import { BookOpen, Leaf, Heart, Search, Shield, Sparkles, Sprout, Sunrise, Trophy } from "lucide-react"
interface Verse {
    id: number
    text: string
    reference: string
    book: string
    chapter: number
    verse: number
}

interface CategoryProps {
    params: Promise<{
        slug: string
    }>
}

const icons = [{ label: "Faith", emoji: Sparkles },        // ✨
{ label: "Peace", emoji: Leaf },            // 🕊️
{ label: "Hope", emoji: Sunrise },          // 🌅
{ label: "Wisdom", emoji: BookOpen },       // 📖
{ label: "Strength", emoji: Trophy },       // 💪
{ label: "Courage", emoji: Shield },        // 🦁
{ label: "Perseverance", emoji: Sprout },   // 🌱
{ label: "Love", emoji: Heart }]

const Category = ({ params }: CategoryProps) => {
    const { slug } = use(params); // Unwrap the promise
    const category = decodeURIComponent(slug); // "Faith" from URL
    const categoryLower = category.toLowerCase();

    const [searchQuery, setSearchQuery] = useState(categoryLower); // default search term
    const [categorySearch, setCategorySearch] = useState('');
    const [bibleId] = useState('de4e12af7f28f599-02'); // KJV Bible ID

    const { results, total, isLoading, isError, error } = useBibleSearch({
        bibleId: bibleId,
        query: searchQuery,
        limit: 20,
        offset: 0
    });

    // Transform API results to match Verse interface
    const transformedVerses: Verse[] = results.map((verse, index) => ({
        id: index,
        text: verse.text,
        reference: verse.reference || '',
        book: verse.bookId || '',
        chapter: 0, // API doesn't provide this directly
        verse: 0    // API doesn't provide this directly
    }));

    // Filter verses based on category search
    const filteredVerses = categorySearch.trim()
        ? transformedVerses.filter(v =>
            v.text.toLowerCase().includes(categorySearch.toLowerCase()) ||
            v.reference.toLowerCase().includes(categorySearch.toLowerCase())
        )
        : transformedVerses;

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <PassageHeader
                    category={category}
                    icon={Sprout}
                    verseCount={total}
                />

                {/* Results section */}
                <div className="mt-12 space-y-6">
                    {isLoading && (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                            <p className="mt-4 text-muted-foreground">Loading passages...</p>
                        </div>
                    )}

                    {isError && (
                        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
                            <p className="text-destructive font-medium">Error loading passages</p>
                            <p className="text-sm text-muted-foreground mt-2">{error?.message}</p>
                        </div>
                    )}

                    {!isLoading && !isError && filteredVerses.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No passages found matching your search.</p>
                        </div>
                    )}

                    {!isLoading && !isError && filteredVerses.length > 0 && (
                        <>
                            {categorySearch && (
                                <p className="text-sm text-muted-foreground">
                                    Showing {filteredVerses.length} of {transformedVerses.length} passages
                                </p>
                            )}
                            {filteredVerses.map((verse) => (
                                <VerseCard key={verse.id} verse={verse} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category;
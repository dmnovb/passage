"use client";

import useSWR from "swr";

const API_BASE = "https://api.scripture.api.bible";

export type UseBibleSearchArgs = {
    bibleId: string;
    query: string;
    limit?: number;
    offset?: number;
};

export type BibleSearchResponse = {
    data?: {
        query?: string;
        limit?: number;
        offset?: number;
        total?: number;
        verses?: Array<{
            id: string;
            orgId?: string;
            bookId?: string;
            chapterId?: string;
            bibleId?: string;
            reference?: string;
            text: string;
        }>;
    };
};

function buildSearchUrl({ bibleId, query, limit, offset }: UseBibleSearchArgs) {
    const url = new URL(`${API_BASE}/v1/bibles/${encodeURIComponent(bibleId)}/search`);
    const params = new URLSearchParams();
    params.set("query", query);
    if (typeof limit === "number") params.set("limit", String(Math.max(0, limit)));
    if (typeof offset === "number") params.set("offset", String(Math.max(0, offset)));
    url.search = params.toString();
    return url.toString();
}

async function fetcher(url: string): Promise<BibleSearchResponse> {
    const apiKey = process.env.NEXT_PUBLIC_BIBLE_API_KEY ?? process.env.BIBLE_API_KEY;
    if (!apiKey) {
        throw new Error("Missing Bible API key. Set NEXT_PUBLIC_BIBLE_API_KEY or BIBLE_API_KEY.");
    }
    const res = await fetch(url, {
        headers: {
            "api-key": apiKey,
            "Accept": "application/json",
        },
        cache: "no-store",
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Bible API error ${res.status}: ${text}`);
    }
    return res.json();
}

export function useBibleSearch(args: UseBibleSearchArgs) {
    const enabled = Boolean(args?.bibleId && args?.query && args.query.trim().length > 0);
    const key = enabled ? buildSearchUrl(args) : null;

    const { data, error, isLoading, mutate } = useSWR<BibleSearchResponse>(key, fetcher, {
        keepPreviousData: true,
        revalidateOnFocus: false,
    });

    return {
        data,
        results: data?.data?.verses ?? [],
        total: data?.data?.total ?? 0,
        // limit: data?.data?.limit ?? args.limit ?? 10,
        // offset: data?.data?.offset ?? args.offset ?? 0,
        isLoading,
        isError: Boolean(error),
        error: error as Error | undefined,
        mutate,
    };
}

// Backwards-compatible default export
const useGetData = useBibleSearch;
export default useGetData;
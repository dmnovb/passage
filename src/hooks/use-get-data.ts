"use client";

import useSWR from "swr";

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
    const url = new URL("/api/bible/search", window.location.origin);
    const params = new URLSearchParams();
    params.set("bibleId", bibleId);
    params.set("query", query);
    if (typeof limit === "number") params.set("limit", String(Math.max(0, limit)));
    if (typeof offset === "number") params.set("offset", String(Math.max(0, offset)));
    url.search = params.toString();
    return url.toString();
}

async function fetcher(url: string): Promise<BibleSearchResponse> {
    const res = await fetch(url, {
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
        revalidateOnFocus: false,
        dedupingInterval: 60000,
        refreshInterval: 0,
        revalidateOnReconnect: false
    });

    return {
        data,
        results: data?.data?.verses ?? [],
        total: data?.data?.total ?? 0,
        isLoading,
        isError: Boolean(error),
        error: error as Error | undefined,
        mutate,
    };
}

// Backwards-compatible default export
const useGetData = useBibleSearch;
export default useGetData;
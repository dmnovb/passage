import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://api.scripture.api.bible";

export async function GET(request: NextRequest) {
    const apiKey = process.env.BIBLE_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: "API key not configured" },
            { status: 500 }
        );
    }

    const searchParams = request.nextUrl.searchParams;
    const bibleId = searchParams.get("bibleId");
    const query = searchParams.get("query");
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");

    if (!bibleId || !query) {
        return NextResponse.json(
            { error: "Missing bibleId or query parameter" },
            { status: 400 }
        );
    }

    const url = new URL(`${API_BASE}/v1/bibles/${encodeURIComponent(bibleId)}/search`);
    const params = new URLSearchParams();
    params.set("query", query);
    if (limit) params.set("limit", limit);
    if (offset) params.set("offset", offset);
    url.search = params.toString();

    try {
        const res = await fetch(url.toString(), {
            headers: {
                "api-key": apiKey,
                "Accept": "application/json",
            },
            cache: "no-store",
        });

        if (!res.ok) {
            const text = await res.text();
            return NextResponse.json(
                { error: `Bible API error: ${text}` },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch from Bible API" },
            { status: 500 }
        );
    }
}
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://www.instagram.com/pcbuildinguf/", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram page");
    }

    const html = await response.text();

    // Try to find the followers count in the JSON data that Instagram embeds
    const jsonMatch = html.match(/"edge_followed_by":{"count":(\d+)}/);
    if (jsonMatch && jsonMatch[1]) {
      const followerCount = parseInt(jsonMatch[1]);
      return NextResponse.json({ followerCount });
    }

    // Fallback: try to find it in meta tags
    const metaMatch = html.match(
      /<meta[^>]*?og:description[^>]*?content="[^"]*?(\d+)\s+Followers/i,
    );
    if (metaMatch && metaMatch[1]) {
      const followerCount = parseInt(metaMatch[1]);
      return NextResponse.json({ followerCount });
    }

    throw new Error("Could not find follower count");
  } catch (error) {
    console.error("Error fetching Instagram count:", error);

    // Return a fallback count if scraping fails
    // You can store this in an environment variable or database
    return NextResponse.json({ followerCount: 909 });
  }
}

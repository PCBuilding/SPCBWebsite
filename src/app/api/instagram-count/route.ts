import { NextResponse } from "next/server";
import { chromium } from "playwright";

export async function GET() {
  let browser;
  try {
    browser = await chromium.launch({
      headless: true,
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.instagram.com/pcbuildinguf/", {
      waitUntil: "networkidle",
      timeout: 30000,
    });

    const metaContent = await page.$eval(
      'meta[property="og:description"]',
      (element: HTMLMetaElement) => element.content,
    );

    const followerMatch = metaContent.match(/([0-9,.]+)\s*Followers/i);
    const followerCount = followerMatch
      ? parseInt(followerMatch[1].replace(/,/g, ""))
      : null;

    if (!followerCount) {
      throw new Error("Could not extract follower count");
    }

    return NextResponse.json({ followerCount });
  } catch (error) {
    console.error("Error fetching Instagram count:", error);
    return NextResponse.json(
      { error: "Failed to fetch follower count" },
      { status: 500 },
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

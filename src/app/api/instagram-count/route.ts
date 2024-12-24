import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set a user agent to appear more like a regular browser
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    );

    // Navigate to the Instagram profile
    await page.goto("https://www.instagram.com/pcbuildinguf/", {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for the followers count to be visible
    await page.waitForSelector('meta[property="og:description"]', {
      timeout: 5000,
    });

    // Get the meta tag content
    const metaContent = await page.$eval(
      'meta[property="og:description"]',
      (element) => element.content,
    );

    // Extract follower count from meta content
    const followerMatch = metaContent.match(/([0-9,.]+)\s*Followers/i);
    const followerCount = followerMatch
      ? parseInt(followerMatch[1].replace(/,/g, ""))
      : null;

    console.log("Fetched content:", metaContent); // For debugging

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

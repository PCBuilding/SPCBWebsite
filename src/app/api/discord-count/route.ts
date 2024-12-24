import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `https://discord.com/api/${process.env.DISCORD_API_VERSION || "v10"}/guilds/${process.env.DISCORD_SERVER_ID}?with_counts=true`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Discord data");
    }

    const data = await response.json();

    return NextResponse.json({ memberCount: data.approximate_member_count });
  } catch (error) {
    console.error("Error fetching Discord count:", error);
    return NextResponse.json(
      { error: "Failed to fetch member count" },
      { status: 500 },
    );
  }
}

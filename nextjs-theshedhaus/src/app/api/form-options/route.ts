import { NextResponse } from "next/server";
import { getFormOptions } from "@/lib/sanity/content";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const formOptions = await getFormOptions();

    // Return with caching headers (1 hour)
    const response = NextResponse.json(formOptions);
    response.headers.set(
      "Cache-Control",
      "public, max-age=3600, stale-while-revalidate=86400",
    );

    return response;
  } catch (error) {
    console.error("Error in form-options API:", error);
    return NextResponse.json(
      { error: "Failed to fetch form options" },
      { status: 500 },
    );
  }
}

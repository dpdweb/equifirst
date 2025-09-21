import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z
  .object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(5),

    // Google Ads campaign fields
    gclid: z.string().optional(),
    utm_source: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_term: z.string().optional(),
  })
  .passthrough(); // ✅ allow all other fields

const WEBHOOK = process.env.ZAPIER_WEBHOOK_URL;

export async function POST(req: Request) {
  if (!WEBHOOK) {
    return NextResponse.json(
      { error: "Server misconfigured: missing Zapier webhook URL" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const cookies = req.headers.get("cookie") || "";

    // Collect campaign params from cookies if not in body
    const cookieMap = Object.fromEntries(
      cookies
        .split(";")
        .map((c) => c.trim().split("="))
        .filter(([k, v]) => k && v)
    );

    const enriched = {
      ...body,
      gclid: body.gclid || cookieMap["gclid"] || "",
      utm_source: body.utm_source || cookieMap["utm_source"] || "",
      utm_campaign: body.utm_campaign || cookieMap["utm_campaign"] || "",
      utm_medium: body.utm_medium || cookieMap["utm_medium"] || "",
      utm_term: body.utm_term || cookieMap["utm_term"] || "",
    };

    // ✅ Validate but allow unknown fields
    const parsed = leadSchema.safeParse(enriched);
    if (!parsed.success) {
      console.error("Validation failed:", parsed.error.flatten());
      return NextResponse.json(
        { error: "Invalid payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    // ✅ Forward everything (including unknown fields) to Zapier
    const zapRes = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!zapRes.ok) {
      const text = await zapRes.text();
      return NextResponse.json({ error: text }, { status: zapRes.status });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error submitting to Zapier:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Quick test endpoint
export async function GET() {
  return NextResponse.json({ message: "API is working ✅" });
}

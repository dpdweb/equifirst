import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z
  .object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(5),

    gclid: z.string().optional(),
    utm_source: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_term: z.string().optional(),
  })
  .passthrough();

export async function POST(req: Request) {
  const WEBHOOK = process.env.ZAPIER_WEBHOOK_URL; // moved here (no stale env)
  if (!WEBHOOK) {
    return NextResponse.json(
      { error: "Server misconfigured: missing Zapier webhook URL" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const cookies = req.headers.get("cookie") || "";

    const cookieMap = Object.fromEntries(
      cookies
        .split(";")
        .map((c) => c.trim())
        .filter(Boolean)
        .map((c) => {
          const idx = c.indexOf("=");
          if (idx === -1) return [c, ""];
          const k = c.slice(0, idx);
          const v = decodeURIComponent(c.slice(idx + 1));
          return [k, v];
        })
    );

    const enriched = {
      ...body,
      gclid: body.gclid || cookieMap["gclid"] || "",
      utm_source: body.utm_source || cookieMap["utm_source"] || "",
      utm_campaign: body.utm_campaign || cookieMap["utm_campaign"] || "",
      utm_medium: body.utm_medium || cookieMap["utm_medium"] || "",
      utm_term: body.utm_term || cookieMap["utm_term"] || "",
    };

    const parsed = leadSchema.safeParse(enriched);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const zapRes = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!zapRes.ok) {
      const text = await zapRes.text().catch(() => "");
      return NextResponse.json(
        { error: "Zapier webhook failed", details: text || zapRes.statusText },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "API is working ✅" });
}

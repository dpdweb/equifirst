import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Forward to Zapier webhook
    const zapRes = await fetch(
      "https://hooks.zapier.com/hooks/catch/21299663/u63cv1h/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

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

// Optional GET (for quick test in browser)
export async function GET() {
  return NextResponse.json({ message: "API is working ✅" });
}

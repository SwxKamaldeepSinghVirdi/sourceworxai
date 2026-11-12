import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  country?: string;
  interest?: string;
  message?: string;
  website?: string; // honeypot
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot check for basic spam protection
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const interest = body.interest?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !company || !interest || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    // In production, forward payload to CRM / transactional email provider here.
    return NextResponse.json(
      {
        ok: true,
        message: "Thank you. Someone from our team will reply within one business day.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request right now." },
      { status: 400 }
    );
  }
}


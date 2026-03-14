import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
	email: z.string().email("Invalid email address"),
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number } {
	const now = Date.now();
	const entry = rateLimitMap.get(ip);

	if (!entry || now > entry.resetAt) {
		rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
		return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
	}

	if (entry.count >= RATE_LIMIT_MAX) {
		return { allowed: false, remaining: 0 };
	}

	entry.count++;
	return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count };
}

function getClientIp(request: NextRequest): string {
	return (
		request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
		request.headers.get("x-real-ip") ??
		"unknown"
	);
}

export async function POST(request: NextRequest) {
	try {
		const ip = getClientIp(request);
		const { allowed, remaining } = getRateLimitInfo(ip);

		if (!allowed) {
			return NextResponse.json(
				{ success: false, message: "Too many requests. Please try again later." },
				{
					status: 429,
					headers: {
						"X-RateLimit-Limit": String(RATE_LIMIT_MAX),
						"X-RateLimit-Remaining": "0",
						"Retry-After": "60",
					},
				},
			);
		}

		const body = await request.json().catch(() => null);

		if (!body) {
			return NextResponse.json(
				{ success: false, message: "Invalid request body." },
				{ status: 400 },
			);
		}

		const result = newsletterSchema.safeParse(body);

		if (!result.success) {
			const errors: Record<string, string> = {};
			for (const issue of result.error.issues) {
				const key = issue.path.join(".");
				if (!errors[key]) {
					errors[key] = issue.message;
				}
			}

			return NextResponse.json(
				{ success: false, message: "Please check your input.", errors },
				{
					status: 400,
					headers: {
						"X-RateLimit-Limit": String(RATE_LIMIT_MAX),
						"X-RateLimit-Remaining": String(remaining),
					},
				},
			);
		}

		console.log("[Newsletter Subscription]", {
			email: result.data.email,
			timestamp: new Date().toISOString(),
		});

		return NextResponse.json(
			{ success: true, message: "Successfully subscribed to the newsletter." },
			{
				status: 200,
				headers: {
					"X-RateLimit-Limit": String(RATE_LIMIT_MAX),
					"X-RateLimit-Remaining": String(remaining),
				},
			},
		);
	} catch (error) {
		console.error("[Newsletter Error]", error);
		return NextResponse.json(
			{ success: false, message: "Something went wrong. Please try again." },
			{ status: 500 },
		);
	}
}

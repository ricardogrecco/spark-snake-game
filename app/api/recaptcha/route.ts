import axios from "axios";

interface RecaptchaResponseData {
  success: boolean;
  score: number;
  error?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const token = body.recaptchaToken;

    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const data: RecaptchaResponseData = response.data;

    if (data.success && data.score > 0.5) {
      return new Response(JSON.stringify(data), { status: 200 });
    } else {
      return new Response(JSON.stringify(data), { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

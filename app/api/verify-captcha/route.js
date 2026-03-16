export async function POST(req) {
  const body = await req.json();
  const token = body.token;

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await response.json();

  if (data.success) {
    return Response.json({ success: true });
  }

  return Response.json({ success: false }, { status: 400 });
}
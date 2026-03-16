"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function CaptchaForm() {
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/verify-captcha", {
      method: "POST",
      body: JSON.stringify({ token }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Captcha Verified ✅");
    } else {
      alert("Captcha Failed ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" placeholder="Email" /> */}

      <ReCAPTCHA
        size="normal"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={(value) => setToken(value)}
      />

    </form>
  );
}
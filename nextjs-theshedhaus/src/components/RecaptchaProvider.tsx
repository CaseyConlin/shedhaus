"use client";

import { GoogleReCaptchaProvider } from "@google-recaptcha/react";
import { ReactNode } from "react";

export function RecaptchaProvider({ children }: { children: ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      type="v3"
      siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}

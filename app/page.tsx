"use client";
import { authClient } from "@/lib/auth-client";

export default function page() {
  return (
    <>
      <button
        onClick={() =>
          authClient.signIn.social({
            provider: "google",
            callbackURL: "/wascallback",
          })
        }
      >
        Sign in
      </button>
    </>
  );
}

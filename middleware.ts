// export { auth as middleware } from "@/auth";
// middleware.ts

import { headers } from "next/headers";
import { auth } from "./auth";

export default async function middleware(request: Request) {
  // Middleware logic here
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log("User:", session); // Log the session for debugging
}

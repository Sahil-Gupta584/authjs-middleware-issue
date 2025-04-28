// import NextAuth, { NextAuthResult } from "next-auth";
// import { channelAccessScopes } from "./app/constants";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import GoogleProvider from "next-auth/providers/google";
// import { prisma } from "./lib/prisma";

// const result = NextAuth(() => {
//   return {
//     adapter: PrismaAdapter(prisma),

//     providers: [
//       GoogleProvider({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         allowDangerousEmailAccountLinking: true,
//         authorization: {
//           params: {
//             scope: channelAccessScopes.join(" "),
//             access_type: "offline",
//             prompt: "consent",
//           },
//         },
//         profile(profile) {
//           return {
//             email: profile.email,
//             id: profile.id,
//             name: profile.name,
//             image: profile.picture,
//             role: "CREATOR",
//           };
//         },
//       }),
//     ],
//     session: { strategy: "jwt" },
//   };
// });

// export const handlers: NextAuthResult["handlers"] = result.handlers;
// export const auth: NextAuthResult["auth"] = result.auth;
// export const signIn: NextAuthResult["signIn"] = result.signIn;
// export const signOut: NextAuthResult["signOut"] = result.signOut;

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});

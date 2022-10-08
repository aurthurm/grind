import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { BACKEND_API } from "../../../lib/constants"

export const authOptions:NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize: async (credentials, req) => {
          const { username, password } = credentials as { username: string, password: string }
          const login = await fetch(BACKEND_API + '/auth/login', {
              method: "POST",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, password })
          }).then(res => res.json())

          if (login) {
            const profile = await fetch(BACKEND_API + '/auth/profile/', {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + login.access_token
                }
            }).then(res => res.json())

            return {  ...profile, success: true, token: login.access_token };

        } else {
          throw new Error('Invalid Credentials');
        }

      },
    }),
    // ...add more providers here
  ],
  secret: "998dkjksjnkjns",
  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.token,
        };
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '', // Hex color code #33FF5D
    logo: '/logo.png', // Absolute URL to image
  },
  debug: true,
}
export default NextAuth(authOptions)
import NextAuth, { AuthOptions, User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

// --- PERBAIKAN: Kata kunci 'export' dihapus dari sini ---
// This configuration object is only for internal use in this file.
const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is a mock authorization. In a real app, you would
        // connect to your database or an external API here.
        if (
          credentials?.email === "user@example.com" &&
          credentials?.password === "password123"
        ) {
          // On successful authentication, return a user object.
          // The properties here will be passed to the `jwt` callback's `user` parameter.
          return {
            id: "1",
            name: "John Doe",
            email: credentials.email,
          };
        }
        // Return null if credentials are not valid.
        return null;
      }
    })
  ],

  // Custom pages for authentication flow
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },

  callbacks: {
    // --- PERBAIKAN: Menambahkan tipe eksplisit untuk parameter ---
    // This callback is called whenever a JWT is created or updated.
    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
      // If `user` object exists, it means it's the initial sign-in.
      // Persist the user ID from the `authorize` function into the token.
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    
    // --- PERBAIKAN: Menambahkan tipe eksplisit untuk parameter ---
    // This callback is called whenever a session is checked.
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      // Pass the user ID from the token to the session object,
      // making it available on the client-side.
      if (token && session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    }
  },

  // The secret is used to sign and encrypt the JWT.
  secret: process.env.NEXTAUTH_SECRET,
  
  // Use JWT as the session strategy.
  session: {
    strategy: "jwt",
  },
};

// The handler is initialized with the auth options.
const handler = NextAuth(authOptions);

// --- PERBAIKAN: Hanya ekspor handler untuk GET and POST ---
// This is the required export format for Next.js App Router Route Handlers.
export { handler as GET, handler as POST };

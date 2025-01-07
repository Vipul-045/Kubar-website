import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "../db/index";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your Email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
          required: true,
        },
      },
      async authorize(credentials: any) {
        // Find the user by email
        const existingUser = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // If user is found, compare passwords
        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordValidation) {
            return {
              id: existingUser.id,
              email: existingUser.email,
            };
          }
        } else {
          // If no user exists, create a new one
          try {
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const user = await db.user.create({
              data: {
                email: credentials.email,
                password: hashedPassword,
              },
            });
            return {
              id: user.id,
              email: user.email,
            };
          } catch (e) {
            console.log(e);
          }
        }

        return null; // If user not found or password doesn't match
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Callback to attach the token id to the session
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; // Attach the user ID to the JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub; // Assign the user ID from the JWT token to the session
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // Custom login page
  },
};

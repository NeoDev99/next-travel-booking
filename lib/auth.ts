import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    secret: process.env.NEXTAUTH_SECRET as string,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token.id,
                name: token.name,
                isAdmin: token.isAdmin,
            };
            return session;
        },
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                const user = await prisma.user.findFirst({
                    where: { email },
                });

                if (user && await bcrypt.compare(password, user.password)) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                    };
                }

                throw new Error("Invalid Email or Password");
            },
        }),
    ],
};

export default NextAuth(authOptions);

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "../db/index"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Enter your Email", required: true },
                password: { label: "Password", type: "password", placeholder: "Enter password", required: true }
            },
            async authorize(credentials: any) {
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await db.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password)
                    if (passwordValidation) {
                        return {
                            id: existingUser.id,
                            email: existingUser.email
                        }
                    }
                    return null;
                }

                else {
                    try {
                        const user = await db.user.create({
                            data: {
                                email: credentials.email,
                                password: hashedPassword
                            }
                        });
                        return {
                            id: user.id,
                            email: user.email
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }

                    return null
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        session:({session, token, user}: any)=>{
            if(session && session.user){
                session.user.id = token.sub;
            }
            return session;
        }
    }
    ,
    pages: {
        signIn: '/login'

    }
}
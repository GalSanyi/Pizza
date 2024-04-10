import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import * as mongoose from "mongoose";
import bcrypt from 'bcrypt'; // Додано імпорт bcrypt
import { User } from '@/models/User';
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            secret: process.env.SECRET,
            id: 'credentials',
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "test@exemple.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;
                mongoose.connect(process.env.MONGO_URL);
                const user = await User.findOne({ email })
                const passwordOk = bcrypt.compareSync(password, user.password);

                if (passwordOk) {
                    return user
                }
                return null
            }
        })
    ]
})

export { handler as GET, handler as POST }
// import mongoose from "mongoose";
// import { User } from '../../../models/User';
// export async function POST(req) {
//     const body = await req.json();
//     mongoose.connect(process.env.MONGO_URL);
//     const createdUser = await User.create(body)
//     return Response.json(createdUser)

// }
import mongoose from "mongoose";
import { User } from '../../../models/User';

export async function POST(req) {
    try {
        const body = await req.json();
        await mongoose.connect(process.env.MONGO_URL);


        const existingUser = await User.findOne({ email: body.email });
        if (existingUser) {
            return new Response(JSON.stringify({ message: "User already exists" }), {
                status: 409,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Створення нового користувача
        const createdUser = await User.create(body);
        return new Response(JSON.stringify(createdUser), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

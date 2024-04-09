import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const UserShema = new Schema({
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true,
        validate: pass => {
            if (!pass?.length || pass.length < 5) {
                new Error("password must be at least 5 characters");

            }
        },

    },
}, { timestamps: true });
UserShema.post('validate', function (user) {
    const notHashwdPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashwdPassword, salt);
})
export const User = model?.User || model("User", UserShema);
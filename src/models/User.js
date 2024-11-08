import bcrypt from 'bcrypt';
import { Schema, models, model } from "mongoose";
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        validate: pass => {
            if (!pass?.length || pass.length < 5) {
                throw new Error("Password must be at least 5 characters long");
            }

        }
    },

},
    { timestamps: true }

);
UserSchema.post('validate', function (user) {
    const notHashedPassword = user.password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);

})
export const User = models?.User || model('User', UserSchema);
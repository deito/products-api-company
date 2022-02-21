import { Schema, model } from 'mongoose'
import bcryptjs from 'bcryptjs';

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        roles: [{
            ref: "Role",
            type: Schema.Types.ObjectId
        }]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt();
    return await bcryptjs.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcryptjs.compare(password, receivedPassword);
}

export default model("User", userSchema);
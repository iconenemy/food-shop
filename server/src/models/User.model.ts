import { Model, model, Schema } from 'mongoose';

import { IUser } from './types/user.type';

const userSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["admin", "staff", "guest"],
        default: "guest"
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: false
})

const User: Model<IUser> = model<IUser>('User', userSchema)

export default User;

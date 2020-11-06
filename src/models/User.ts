import {compare, hash} from 'bcrypt';
import {Document, Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        validate: {
            validator: (value: string) =>
                /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
                    .test(value),
            message: 'email is invalid'
        },
        required: [true, 'email is required'],
        unique: [true, 'email should be unique']
    },
    username: {
        type: String,
        validate: {
            validator: (value: string) => /^(?=[a-z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(value),
            message: 'username is invalid'
        },
        required: [true, 'username is required.'],
        unique: [true, 'username should be unique']
    },
    bio: {
        type: String,
        max: [200, 'the max length of bio is 200 characters']
    },
    password: {
        type: String,
        required: [true, '0x00005'],
        validate: {
            validator: (value: string) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/.test(value),
            message: '0x00006'
        },
        select: false
    },
    avatar: {
        type: String,
        default: 'default.jpg'
    }
});

export interface User {
    name: string;
    email: string;
    username: string;
    bio?: string;
    password: string;
    avatar: string;
}

userSchema.methods.correctPassword = async function (candidatePassword: string, userPassword: string) {
    return await compare(candidatePassword, userPassword);
};

export interface IUser extends User, Document {
    correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>,
}

userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await hash(this.password, 12);
    next();
});

const User = model<IUser>('User', userSchema);

export default User;

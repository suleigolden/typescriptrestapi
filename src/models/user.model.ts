import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import config from "config";


export interface UserDocument {
    isModified: any;
    email: string;
    name: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function(next ) {
    let user = this as UserDocument;

    if(!user.isModified()) {
        return next(); 
    }

    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactory'));

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();

});

//Compare user password with the hash
userSchema.methods.comparePassword = async function(
    candidatePassword: string): Promise<boolean> {
    const user = this as UserDocument;
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false); 
}


const UserModel = mongoose.model("User", userSchema);
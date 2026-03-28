import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    hashedPassword: {
        type: String,
        require: true
    },
    displayName: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    avatarUrl: {
        type: String // lưu link để hiển thị ảnh
    },
    avatarId: {
        type: String // lưu id để xoá hình ảnh
    },
    bio: {
        type: String,
        maxlength: 500
    },
    phone: {
        type: String,
        sparse: true //cho phép null nhưng != null phải là độc nhất
    }
},
{
    timestamps: true,
}
);

const User = mongoose.model("User", userSchema);
export default User;
import bcrypt from "bcrypt";
import User from "../models/User.js";

// SignUp
export const signUp = async(req, res) => {
    try {
        const {email, password, firstname, lastname} = req.body;

        if(!email || !password || !firstname || !lastname) {
            return res.status(400).json({message: "Thông tin không được để trống!"});
        }

        // check user tồn tại?
        const duplicate = await User.findOne({email});
        if (duplicate) {
            return res.status(409).json({message: "Email này đã tồn tại tài khoản"});
        }

        // Mã hoá pass

        const hashedPassword = await bcrypt.hash(password, 10); // salt = 10...

        // Tạo user mới
        await User.create({
            email,
            hashedPassword,
            displayName: `${firstname} ${lastname}`
        });

        // Return
        return res.sendStatus(204);

    } catch (error) {
        console.error("Lỗi khi gọi signUp", error);
        return res.status(500).json({message: "Lỗi hệ thống"});
    }
}

export const getLogin = (request, response) => {
    response.status(200).send("hello world 100");
}
export const updateLogin = (req, res) => {
    res.status(200).json({message: "not bye bye!!!"})
}
export const deleteLogin = (req, res) => {
    res.status(200).json({message: "remove!!!"})
}
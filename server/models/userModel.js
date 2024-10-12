import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    handle: {
        type: String,
        required: true
    },

    images:[
        {
            filename:String,
            path: String
        }
    ]

})

const User = mongoose.model('Users', userSchema);

export default User;


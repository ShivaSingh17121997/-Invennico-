
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    status: String,
    phoneNo: Number,
    address: String


}, {
    versionKey: false
})

const userModel = mongoose.model("users", userSchema);

module.exports = {
    userModel
}

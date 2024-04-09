const mongoosee = require("mongoose");

mongoosee.connect("mongodb+srv://shashankxrm:iNCORRECT%4045@cluster0.mwm4ybk.mongodb.net/")

const todoSchema = mongoosee.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoosee.model("todos", todoSchema);

module.exports = {
    todo
}
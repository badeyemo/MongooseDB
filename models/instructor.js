const { Mongoose, model } = require("mongoose");

const instructorSchema = new Mongoose.schema(
    {
        firstName: String,
        lastName: String,
        isHilarious: { type: Boolean, default: true },
        favoriteColors: [String]
    },
    { timestamps: true }
);

const Instructor = mongoose.model("Instructor", instructorSchema);

model.exports = Instructor;
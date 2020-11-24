const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.promise = global.Promise;

mongoose
    .connect("mongodb://localhost/first_mongoose_app", {
        useMongoClient: true
    })
    .then(() => {
        console.log("Connected to MongooseDB");
    })
    .catch(err => {
        console.log(err);
    });
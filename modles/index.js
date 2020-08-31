const mongoose = require("mongoose")

exports.connect = () => new Promise((resolve, reject) => {
    mongoose.set("debug", process.env.NODE_ENV !== 'production');
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on("error", reject);
    mongoose.connection.on("connected", resolve);
});

exports.Workout = require("./workout");
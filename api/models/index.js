const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.formulario = require("./model.js")(mongoose);
//console.log("index", db);
module.exports = db;

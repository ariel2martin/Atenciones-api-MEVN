const express = require("express");
const cors = require("cors");
const path = __dirname + '/atenciones/dist/';
const app = express();
require('dotenv').config();

var corsOptions = {
  origin: process.env.CORS || "http://localhost:81"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
/*
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

app.use('/css', express.static(path + 'css'));
app.use('/fonts', express.static(path + 'fonts'));
app.use('/js', express.static(path + 'js'));
app.use('/img', express.static(path + 'img'));
app.get("/", (req, res) => {

  res.sendFile(path + "index.html");
});


require("./api/routes/routes")(app);

const db = require("./api/models");
//console.log("server", db);
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado a la base de datos Mongo");
  })
  .catch(err => {
    console.log("Error! no se conectó a la base de datos Mongo", err);
    process.exit();
  });


// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

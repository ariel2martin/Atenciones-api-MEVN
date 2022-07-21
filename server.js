const express = require("express");
const cors = require("cors");
const path = __dirname + '/atenciones/dist/';
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
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

app.use('/css', express.static(path + 'css'));
app.use('/fonts', express.static(path + 'fonts'));
app.use('/js', express.static(path + 'js'));
app.use('/img', express.static(path + 'img'));
app.get("/", (req, res) => {

  res.sendFile(path + "index.html");
});

require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

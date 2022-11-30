require("dotenv").config();
const express = require("express");
const http = require("node:http");
const cors = require("cors");
const app = express();

const host = "0.0.0.0";
const port = 8080;

app.use(express.json());

// http://192.168.1.67:3000

var whitelist = [
  "http://127.0.0.1:3000",
  "http://localhost:3000",
  "http://127.0.0.1",
  "http://192.168.1.67:3000",
  "https://merry-bienenstitch-7db92b.netlify.app",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.get("/message", cors(corsOptions), (req, res) => {
  res.json({ message: `${process.env.PRIVATE_KEY}` });
});

// If needed: Allow options to pass CORS preflight check
app.options("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization,Content-Length,X-Requested-With"
  );
  res.sendStatus(200);
});

// // test route
// app.get("/test", (req, res) => res.json({ message: "Test Message" }));

// app.use("/message", require("./routes/message"));

app.listen(port, host, () =>
  console.log(`App listening on at http://${host}:${port}`)
);

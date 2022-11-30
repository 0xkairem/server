require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const port = 8080;

app.use(express.json());

// http://192.168.1.67:3000

var whitelist = ["https://merry-bienenstitch-7db92b.netlify.app"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Access Denied"));
    }
  },
};

app.get("/message", cors(corsOptions), (req, res) => {
  res.json({ message: `${process.env.PRIVATE_KEY}` });
});

// test route
// app.get("/test", (req, res) => res.json({ message: "Test Message" }));

app.listen(port, () =>
  console.log(`App listening on http://localhost:${port}`)
);

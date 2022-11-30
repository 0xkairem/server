require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 80;

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3005",
  optionsSuccessStatus: 200,
  methods: "GET",
};

app.use(cors(corsOptions));

// test route
app.get("/", (req, res) => res.json({ message: "Test Message" }));

app.use("/message", require("./routes/message"));

app.listen(port, () => console.log(`App listening on port ${port}`));

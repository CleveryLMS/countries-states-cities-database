import express from "express";
import fs from "fs";

const app = express();
const port = 8080;
const countries = JSON.parse(fs.readFileSync("./countries.json", "utf8"));
// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/countries", (req, res) => {
  res.send(countries);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://0.0.0.0:${port}`);
});

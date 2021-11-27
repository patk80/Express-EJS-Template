const express = require("express");
const app     = express();
const path    = require("path");
const port    = 8080;

app.use(express.static(path.join(__dirname, "public")));

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("*", (req, res) => {
    res.send("RANDOM PAGE");
});

app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`);
});

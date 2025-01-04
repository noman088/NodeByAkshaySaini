// console.log("Startting a new project!");
const express = require("express");
const app = express();
app.use("/hello", (req, res) => {
    res.send("Hii Hello Hello");
});
app.use("/hii", (req, res) => {
    res.send("Adab from the dashboard!");
});
app.use("/test", (req, res) => {
    res.send("Hello from the Test!");
});
app.use("/", (req, res) => {
    res.send("Welcome to Backend First Class!");
});
// app.listen(3000);
app.listen(3000, () => {
    console.log("Server is successfully listening at PORT 3000");
});

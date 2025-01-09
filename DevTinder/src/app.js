// console.log("Startting a new project!");
const express = require("express");
const app = express();

// app.use("/hello", (req, res) => {
//     res.send("Hii Hello Hello");
// });
// app.use("/hii", (req, res) => {
//     res.send("Adab from the dashboard!");
// });
// app.use("/test", (req, res) => {
//     res.send("Hello from the Test!");
// });
// app.use("/", (req, res) => {
//     res.send("Welcome to Backend First Class!");
// });
// // app.listen(3000);
// app.listen(3000, () => {
//     console.log("Server is successfully listening at PORT 3000");
// });

// 08-01-2025

// app.use("/", (req, res) => {
//     res.send("Hello from backend Homepage");
// });
// app.use("/hello", (req, res) => {
//     res.send("This is hello page");
// });
// app.use("/namaste", (req, res) => {
//     res.send("This is namaste's page");
// });
// app.use("/noman", (req, res) => {
//     res.send("This is Noman's page");
// });
// app.use("/kamran", (req, res) => {
//     res.send("hello Kamran ");
// });
// app.use("/Test", (req, res) => {
//     res.send("This is test page");
// });
// app.use("/", (req, res) => {
//     res.send("This is homepage");
// });
// app.listen(7777, () => {
//     console.log("Server is successfully running on PORT 7777");
// });

// Positioning of routes are matters a lot
// when you position your / routes before everything else  it doesn't go to any other routes
// like / after that whichever routes come it doesn't show that routes like /hello or anything with after  /
//  ex: /hello , /hello/hii/234 etcc.

// but when we position our routes right.then it would behave right.like first node see this routes is match or
// not after that it goes to another routes . that's why we should place the / route at the end

// -------------------09-01-2025-------------------------------
// ordering matter a lot that's why when we use app.use then no any http requuest get  a chance to execute and every request it only gives HAHAHA

/*  
app.use("/user", (req, res) => {
    res.send("HAHAHAHAHAHA");
});

*/

// app.get("/user", (req, res) => {
//     res.send({ firstName: "Noman", lastName: "Ahmed" });
// });

// app.use("/test", (req, res) => {
//     res.send("Hello from the Test Server");
// });
// app.post("/user", (req, res) => {
//     console.log("save data to the database");
//     res.send("Data successfully saved to the database");
// });
// app.delete("/user", (req, res) => {
//     res.send("Deleted the user seccessfully");
// });

// app.listen(7777, () => {
//     console.log("Server is successfully running on 7777");
// });

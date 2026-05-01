import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/courses", (req, res) => {
    res.json({
        name: "Sajid",
        age: 22,
        course: "Web Development"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

export default app;

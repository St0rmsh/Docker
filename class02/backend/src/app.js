import express from "express";
const app = express();

app.get("/api/message", (req, res) => {
    res.send("Hello World!");
});


app.get("/api/health", (req, res) => {
    res.json({
        message : "ok",
        status : 200,
    })
})

app.get("/api/user", (req, res) => {
    const user = [
        {name: "manthan", age: 22},
        {name: "Lulia", age: 25},
        {name: "Man", age: 23}
    ]
    res.status(200).json({
        sucess:true,
        message:"user data fetched successfully",
        data: user
    })
})





export default app;
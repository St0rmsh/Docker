import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    
    let sum = 1

    for (let i = 0; i < 100000000; i++) {
        sum+=1
        
    }

    res.send(`The sum is ${sum}`)
});

export default app;
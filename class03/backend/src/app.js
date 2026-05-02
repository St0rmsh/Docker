import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();



app.use(express.static(path.join(__dirname, "public")));




app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.get("/api/healthcheck", (req,res)=>{
   res.json({message:"OK"})
})

app.get("/api/data", (req,res)=>{
   res.json({message:"This is data from the backend"})
})

app.get("/api/user", (req,res)=>{
   res.json({name: "John", age: 25})
})

app.use((req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

export default app;
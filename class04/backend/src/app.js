import express from "express"
import morgan from "morgan"

const app = express()


app.use(morgan("dev"))


app.get("/",(req,res)=>{

    let sum = 1
    let target = 1000000000

    for (let i = 0; i < target; i++) {
        sum+=i   
    }    
    res.send(`Hello World! the sum is ${sum}`)
})





export default app
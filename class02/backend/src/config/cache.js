import dotenv from "dotenv";
dotenv.config();



if(!process.env.PORT){
    throw new Error("PORT is not defined");
}

export const config = {
    port : process.env.PORT,
};
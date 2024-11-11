import express from "express";
import pkg from 'express';
import dotenv from "dotenv";
import cors from "cors";
import webRouter from "./src/routers/web.js";



dotenv.config()
const { json, urlencoded, static: stats } = pkg;
const app = express();
const port = process.env.PORT;


app.use(
    json({
        limit: "50mb",
    })
);


app.use(express.json());
app.use(cors({origin: "*"}));
app.use(urlencoded({ extended: true }));
app.use(stats("src/public/"));
app.set("view engine", "ejs");
app.set("views", "src/views");


app.use(webRouter);



app.listen(port, () =>{
    console.log(`App is running on port: ${port}`);
})
import express from "express";
import "reflect-metadata"

import { router } from "./routes"

const app = express();

app.use(express.json());

app.use(router);

app.get("/teste", (request, response) => {
    return response.send("Certo mesmo");
})

app.listen(3333, ()=> {
    console.log("Running...");
})
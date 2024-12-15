import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { routeClient } from "./routes/client/index.route";
const app:Express = express();
const port: number = 3000;

routeClient(app)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
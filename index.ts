import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./config/database";
sequelize;

import { routeClient } from "./routes/client/index.route";
const app:Express = express();
const port: number = 3000;


app.set('views', `${__dirname}/views`); //Tìm đến thư mục tên là view
app.set('view engine', 'pug')// template engine sử dụng là pug
app.use(express.static(`${__dirname}/public`))// thiết lập thư mục chứa file tĩnh
routeClient(app)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
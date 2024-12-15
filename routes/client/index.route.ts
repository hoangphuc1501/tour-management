import express, { Express } from "express";
import { homeRoute } from "./home.route";

export const routeClient = (app: Express): void =>{

    app.use("/", homeRoute); 
}


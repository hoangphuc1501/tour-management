import express, { Express } from 'express';
const router = express.Router();

import * as controller from "../../controllers/home.controller";

router.get("/", controller.index)

export const homeRoute = router
'use strict';

import express from "express";
import start from "./controllers/start.js";
import dashboard from "./controllers/dashboard.js";
import collection from "./controllers/collection.js";
import about from "./controllers/about.js";
import playlist from "./controllers/playlist.js";


const router = express.Router();

router.get("/", start.createView);
router.get("/dashboard", dashboard.createView);
router.get("/collection/:id", collection.createView);
router.get("/about", about.createView);
router.get("/playlist/:id", playlist.createView);

export default router;
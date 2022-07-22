import express, { json } from "express";
import cors from "cors";

import categoriesRouter from "./routes/categoriesRouter.js";
import gamesRouter from "./routes/gamesRouter.js";

const app = express();
app.use(cors());
app.use(json());

app.use(categoriesRouter);
app.use(gamesRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server On!"));

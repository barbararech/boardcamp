import express, { json } from "express";
import cors from "cors";

import categoriesRouter from "./routes/categoriesRouter.js";
import gamesRouter from "./routes/gamesRouter.js";
import customersRouter from "./routes/customersRouter.js";
import rentalsRouter from "./routes/rentalsRouter.js";

const app = express();
app.use(cors());
app.use(json());

app.use(categoriesRouter);
app.use(gamesRouter);
app.use(customersRouter);
app.use(rentalsRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server On!"));

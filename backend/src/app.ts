import express from "express";

import { system, api } from "./routes";
import morganMiddleware from "./middlewares/morgan";
import errorMiddleware from "./middlewares/errorHandler";

const app = express();

app.use(morganMiddleware);

app.use("/api", api);
app.use("/system", system);

app.use(errorMiddleware);

export default app;

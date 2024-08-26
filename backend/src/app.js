import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
/* express.json() Middleware:

This middleware automatically parses incoming requests with a content type of application/json.
It uses the built-in JSON parsing capabilities of JavaScript to convert the request body string into a JavaScript object.
Once parsed, the object is made accessible on the req.body property of the request object.
Your Code's Configuration:

You've included express.json({ limit: "16kb" }) in your code, which activates the built-in JSON parsing and sets a limit of 16kb on the size of the JSON data it can handle.
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

*/

// routing

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export { app };

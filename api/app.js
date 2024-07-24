import express from "express";
import Postrouter from "./routes/post.js";
import AuthRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use("/api/post", Postrouter);
app.use("/api/auth", AuthRouter);
app.use(cookieParser());

app.listen(3002, () => {
  console.log("the server is running on 3002 server");
});

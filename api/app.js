import express from "express";
import Postrouter from "./routes/post.js";
import AuthRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import CORS from "cors";
import testRouter from "./routes/test.route.js";

const app = express();
console.log(process.env.CLIENT_URL);
app.use(CORS({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser());
app.use("/api/post", Postrouter);
app.use("/api/auth", AuthRouter);
app.use("/api/test/", testRouter);

app.listen(3002, () => {
  console.log("the server is running on 3002 server");
});

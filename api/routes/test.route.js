import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller";

const testRouter = express.Router();

testRouter.get("/should-be-logged-in", shouldBeLoggedIn);

testRouter.get("/shoul-be-admin", shouldBeAdmin);

export default testRouter;

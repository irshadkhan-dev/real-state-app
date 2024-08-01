import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

const UserRouter = express.Router();

UserRouter.get("/", getUsers);
UserRouter.get("/:id", verifyToken, getUser);
UserRouter.put("/:id", verifyToken, updateUser);
UserRouter.delete("/:id", verifyToken, deleteUser);

export default UserRouter;

import express from "express";

import { verifyToken } from "../middlewares/VerifyToken.js";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.controllr.js";

const PostRouter = express.Router();
PostRouter.get("/", getPosts);
PostRouter.get("/:id", getPost);
PostRouter.post("/", verifyToken, addPost);
PostRouter.put("/:id", verifyToken, updatePost);
PostRouter.delete("/:id", verifyToken, deletePost);

export default PostRouter;

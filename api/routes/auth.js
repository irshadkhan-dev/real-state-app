import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const Authrouter = express.Router();

Authrouter.post("/register", register);

Authrouter.post("/login", login);

Authrouter.post("/logout", logout);

export default Authrouter;

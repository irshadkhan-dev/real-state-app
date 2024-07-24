import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("router work");
});

export default router;

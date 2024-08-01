import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ msg: "Not Authenticted" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(403).json({ msg: "Token is not Vald" });

    req.userId = payload.id;

    next();
  });
};

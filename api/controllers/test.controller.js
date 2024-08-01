import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = async (req, res) => {
  const userId = req.userId;

  res.status(200).json({
    msg: "You are Authenticated",
  });
};

export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ msg: "Not Authenticated" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(403).json({ msg: "Token Invalid" });

    if (!payload.isAdmin) {
      return res.status(403).json({ msg: "Not authorised" });
    }
  });

  res.status(200).json({
    msg: "You are Authenticated",
  });
};

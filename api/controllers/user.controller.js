import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const allUser = await prisma.user.findMany();
    res.json(allUser);
  } catch (err) {
    console.log(err);
    res.json({
      msg: "Failed to load users",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userTrue = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userTrue) return res.status(402).json({ msg: "User does not exits" });

    res.status(200).json(userTrue);
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (req, res) => {
  const { password, ...inputs } = req.body;
  const id = req.params.id;
  const userId = req.userId;

  if (id !== userId) return res.status(403).json({ msg: "Not Authorised" });
  let updatedPass = null;
  try {
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      if (!hashedPassword) {
        console.log(`Error hashing password`);
      }
    }

    const userTrue = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...inputs,
        ...(updatedPass && { password: updatedPass }),
      },
    });

    if (!userTrue) return res.json({ msg: "Invalid credentials" });

    res.status(200).json(userTrue);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;

  if (id !== userId) return res.status(403).json({ msg: "Not Authorised" });
  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id,
      },
    });

    console.log(deleteUser);
    if (!deleteUser)
      return res.status(401).json({ msg: "Failed to delete the User" });

    res.status(200).json({
      msg: "User deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

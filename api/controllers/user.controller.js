import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

export const savePost = async (req, res) => {
  const postId = req.body.postId;
  const tokenUserId = req.userId;

  try {
    const savedPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId,
        },
      },
    });

    if (savedPost) {
      await prisma.savedPost.delete({
        where: {
          id: savedPost.id,
        },
      });
      res.status(200).json({ msg: "Post removed from saved List" });
    } else {
      await prisma.savedPost.create({
        data: {
          userId: tokenUserId,
          postId,
        },
      });
      res.status(200).json({ msg: "Post Saved" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Failed to Save Post" });
  }
};

export const profilePosts = async (req, res) => {
  const tokenUserId = req.params.userId;
  try {
    const createdPost = await prisma.post.findMany({
      where: {
        userId: tokenUserId,
      },
    });

    const saved = await prisma.savedPost.findMany({
      where: {
        userId: tokenUserId,
      },
      include: {
        post: true,
      },
    });

    const savedPost = saved.map((item) => item.post);

    res.status(200).json({ createdPost, savedPost });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Failed to fetch Posts" });
  }
};

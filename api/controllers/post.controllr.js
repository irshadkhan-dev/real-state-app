import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const getPosts = async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const allPost = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 10000000,
        },
      },
    });
    if (!allPost) return res.status(401).json({ msg: "Error fetching Posts" });

    res.status(200).json(allPost);
  } catch (err) {
    console.log(err);
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        PostDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    const token = req.cookie?.token;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (!err) {
          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          res.status(200).json({ ...post, isSaved: saved ? true : false });
        }
      });
    }

    res.status(200).json({ ...post, isSaved: false });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const userId = req.userId;

  try {
    const createPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: userId,
        PostDetail: {
          create: body.postDetail,
        },
      },
    });

    if (!createPost)
      return res.status(401).json({ msg: "Failed to create user" });

    res.status(200).json(createPost);
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  const body = req.body;
  console.log(id);
  try {
    const updatePost = await prisma.post.update({
      where: {
        id,
      },

      data: {
        ...body,
      },
    });

    if (!updatePost)
      return res.status(403).json({ msg: "Failed to update the Post" });

    res.status(200).json(updatePost);
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    const toDelete = await prisma.post.delete({
      where: {
        id,
      },
    });

    if (!toDelete)
      return res.status(401).json({ msg: "Failed to delete the post" });

    res.status(200).json({ msg: "Post deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

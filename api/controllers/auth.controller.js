import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import { Prisma } from "@prisma/client";
import webToken from "jsonwebtoken";
const JWT_SECRET = "irshad123";

const saltRounds = 10;

const hashPassword = async (password, secretPass) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.log("Error hashing the password: ", error);
  }
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // hash the password
    const hashedPassword = await hashPassword(password);

    //Create a new user

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "The user has been created.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to create user!",
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // CHECK IF THE USER EXISTS
    const userTrue = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    console.log(username);
    console.log(userTrue);
    if (!userTrue) {
      return res.status(401).json({
        message: "User does not exists",
      });
    }

    //CHECK IF THE PASSWORD IS CORRECT
    bcrypt.compare(password, userTrue.password, (err, result) => {
      if (err) {
        console.log(`Error comparing password`, err);
      } else if (result) {
        console.log("The password matches");
      } else {
        console.log("Password incorrect");
      }
    });

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = webToken.sign(
      {
        id: userTrue.id,
        isAdmin: true,
      },
      JWT_SECRET,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = userTrue;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to Login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({
    message: "Logout Successful",
  });
};

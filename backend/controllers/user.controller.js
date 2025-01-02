import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import * as userService from "../services/user.service.js";
import blackListTokenModel from "../models/blacklistToken.model.js";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exist" });
  }

  const hasedPassoword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: name.firstName,
    lastName: name.lastName,
    email,
    password: hasedPassoword,
  });

  const token = user.generateJWT();

  res.status(201).json({ token, user });
};

export const loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  try {
    const token = user.generateJWT();

    res.cookie("token", token);

    const userResponse = user.toObject();

    delete userResponse.password;

    return res.status(200).json({ token, user: userResponse });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error logging in." });
  }
};

export const getUserProfile = async (req, res) => {
  return res.status(200).json(req.user);
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.status(200).json({ message: "Logged out" });
};

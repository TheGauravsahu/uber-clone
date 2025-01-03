import { validationResult } from "express-validator";
import captainModel from "../models/captain.model.js";
import * as captainService from "../services/captain.service.js";
import blackListTokenModel from "../models/blacklistToken.model.js";

export const registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, vehicle } = req.body;

  const captainExists = await captainModel.findOne({ email });

  if (captainExists) {
    return res.status(400).json({ message: "Captain already exist" });
  }

  const hasedPassoword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstName: name.firstName,
    lastName: name.lastName,
    email,
    password: hasedPassoword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateJWT();

  const captainResponse = captain.toObject();

  delete captainResponse.password;

  return res.status(201).json({ token, captain: captainResponse });
};

export const loginCaptain = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  try {
    const token = captain.generateJWT();

    res.cookie("token", token);

    const captainResponse = captain.toObject();

    delete captainResponse.password;

    return res.status(200).json({ token, captain: captainResponse });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error logging in." });
  }
};

export const getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain });
};

export const logoutCaptain = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.status(200).json({ message: "Logged out" });
};

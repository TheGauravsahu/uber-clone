import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import captainModel from "../models/captain.model.js";
import blackListTokenModel from "../models/blacklistToken.model.js";

export const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "user") {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = await userModel.findById(decoded._id);

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "captain") {
      return res.status(403).json({ message: "Access denied" });
    }

    req.captain = await captainModel.findById(decoded._id);

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized", error });
  }
};

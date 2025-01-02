import { Router } from "express";
import { body } from "express-validator";
import * as userController from "../controllers/user.controller.js";
import * as authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("name.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.loginUser
);

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

router.post("/logout", authMiddleware.authUser, userController.logoutUser);

export default router;

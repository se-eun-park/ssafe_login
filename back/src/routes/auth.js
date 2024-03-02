/**
 * BaseUrl: /auth ...
 *
 */
import express from "express";
import { validateSignup, validateLogin } from "../middleware/validate.js";
import {
  signupController,
  loginController,
  testController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", validateSignup, signupController);
router.post("/login", validateLogin, loginController);
router.get("/test", testController);

export default router;

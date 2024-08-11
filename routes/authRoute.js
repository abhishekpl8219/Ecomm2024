import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
///router object
const router = express.Router();

//routing
//REgister
router.post("/register", registerController);
//Login || post
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);
export default router;

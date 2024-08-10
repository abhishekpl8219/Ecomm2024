import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
///router object
const router = express.Router();

//routing
//REgister
router.post("/register", registerController);
//Login || post
router.post("/login", loginController);
export default router;

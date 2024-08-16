import { Router } from "express";
const router = Router();
import { login, logout, register } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateUserRegistrationInput,
} from "../middleware/validationMiddleware.js";

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  message: { msg: "IP rate limit exceeded. Retry again in 15 minutes" },
});

router.post("/register", apiLimiter, validateUserRegistrationInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.get("/logout", logout);

export default router;

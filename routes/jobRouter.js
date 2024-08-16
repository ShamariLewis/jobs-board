import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

import { checkIfTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllJobs)
  .post(checkIfTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkIfTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkIfTestUser, validateIdParam, deleteJob);

export default router;

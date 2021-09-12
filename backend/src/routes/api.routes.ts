import express from "express";
import cors from "cors";
import { authenticateRequest } from "../middlewares/authentication";
import { userController } from "../controllers";

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post("/login", userController.loginUser);
router.post("/register", userController.addUser);

router.use(authenticateRequest);

router.put("/comment");
router.post("/comment");
router.delete("/comment");

export default router;

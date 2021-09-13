import express from "express";
import cors from "cors";
import { authenticateRequest } from "../middlewares/authentication";
import { userController } from "../controllers";
import { commentsController } from "../controllers/commentsController";

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post("/login", userController.loginUser);
router.post("/register", userController.addUser);

router.use(authenticateRequest);

router.get("/comment", commentsController.getAll);
router.get("/comment/:commentId", commentsController.getById);
router.post("/comment", commentsController.create);
router.put("/comment");
router.delete("/comment");

export default router;

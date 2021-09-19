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
router.get("/comment/hospital", commentsController.getHospital);
router.get("/comment/room", commentsController.getRoom);
router.get("/comment/nursery", commentsController.getNursery);
router.get("/comment/:commentId", commentsController.getById);
router.post("/comment", commentsController.create);
router.put("/comment/:commentId", commentsController.modify);
router.delete("/comment/:commentId/:type", commentsController.delete);

export default router;
